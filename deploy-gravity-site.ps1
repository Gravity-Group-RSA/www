param(
    [string]$RepoPath = "C:\Users\Raydo\OneDrive\Companies\G\Gravity Group RSA\www",
    [string]$RemoteUrl = "https://github.com/Gravity-Group-RSA/www.git",
    [string]$AdsId = "AW-17970737132",

    # Replace these with your actual Google Ads conversion labels
    [string]$WhatsAppSendTo = "AW-17970737132/WHATSAPP_LABEL",
    [string]$CallSendTo = "AW-17970737132/CALL_LABEL",

    [string]$PhoneNumber = "+27826300543",
    [string]$WhatsAppNumber = "27826300543",
    [string]$CommitMessage = "Responsive UX fixes, CTA tracking, debug pass, and deployment sync"
)

$ErrorActionPreference = "Stop"

function Write-Section($msg) {
    Write-Host ""
    Write-Host "==== $msg ====" -ForegroundColor Cyan
}

function Backup-File {
    param([string]$Path)
    if (Test-Path $Path) {
        $backupDir = Join-Path (Split-Path $Path -Parent) "_backup"
        if (-not (Test-Path $backupDir)) {
            New-Item -ItemType Directory -Path $backupDir | Out-Null
        }
        $name = Split-Path $Path -Leaf
        $timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
        Copy-Item $Path (Join-Path $backupDir "$timestamp-$name") -Force
    }
}

function Read-Text {
    param([string]$Path)
    return [System.IO.File]::ReadAllText($Path, [System.Text.Encoding]::UTF8)
}

function Write-Text {
    param([string]$Path, [string]$Content)
    [System.IO.File]::WriteAllText($Path, $Content, [System.Text.Encoding]::UTF8)
}

function Ensure-Remote {
    param([string]$RemoteUrl)
    $remotes = git remote
    if ($LASTEXITCODE -ne 0) { throw "Git is not available or repo is not initialized." }

    if ($remotes -notcontains "origin") {
        git remote add origin $RemoteUrl
    } else {
        git remote set-url origin $RemoteUrl
    }
}

function Ensure-GoogleTrackingBlock {
    param(
        [string]$Html,
        [string]$AdsId,
        [string]$WhatsAppSendTo,
        [string]$CallSendTo
    )

    $trackingBlock = @"
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=$AdsId"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '$AdsId');

  function gravityTrackConversion(sendTo, url) {
    try {
      gtag('event', 'conversion', {
        'send_to': sendTo,
        'event_callback': function () {
          if (url) window.location.href = url;
        }
      });
      setTimeout(function () {
        if (url) window.location.href = url;
      }, 800);
    } catch (e) {
      if (url) window.location.href = url;
    }
    return false;
  }

  function trackWhatsAppConversion(url) {
    return gravityTrackConversion('$WhatsAppSendTo', url);
  }

  function trackCallConversion(url) {
    return gravityTrackConversion('$CallSendTo', url);
  }
</script>
"@

    if ($Html -notmatch [regex]::Escape("googletagmanager.com/gtag/js?id=$AdsId")) {
        if ($Html -match "</head>") {
            $Html = $Html -replace "</head>", "$trackingBlock`r`n</head>"
        } else {
            $Html = $trackingBlock + "`r`n" + $Html
        }
    } else {
        # Replace any existing generic Ads tag block with the richer one if tracking helpers are missing
        if ($Html -notmatch "trackWhatsAppConversion" -or $Html -notmatch "trackCallConversion") {
            $Html = [regex]::Replace(
                $Html,
                "<script async src=`"https://www\.googletagmanager\.com/gtag/js\?id=.*?</script>\s*<script>.*?gtag\('config',\s*'.*?'\);\s*</script>",
                [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $trackingBlock },
                [System.Text.RegularExpressions.RegexOptions]::Singleline
            )
        }
    }

    return $Html
}

function Ensure-GlobalUXScript {
    param(
        [string]$Html,
        [string]$PhoneNumber,
        [string]$WhatsAppNumber
    )

    $waUrl = "https://wa.me/$WhatsAppNumber?text=Hi%20Gravity%20Group%20RSA%2C%20I%20need%20assistance."
    $uxScript = @"
<script>
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const searchInputs = document.querySelectorAll('[data-service-search]');
  const serviceCards = document.querySelectorAll('[data-service-card]');
  const backToTop = document.querySelector('[data-back-to-top]');
  const yearTargets = document.querySelectorAll('[data-current-year]');

  yearTargets.forEach(function(el){ el.textContent = new Date().getFullYear(); });

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      const open = mobileMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  searchInputs.forEach(function(input){
    input.addEventListener('input', function(){
      const q = input.value.trim().toLowerCase();
      serviceCards.forEach(function(card){
        const txt = (card.textContent || '').toLowerCase();
        card.style.display = txt.indexOf(q) >= 0 ? '' : 'none';
      });
    });
  });

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function(el){
    if (!el.getAttribute('onclick')) {
      el.setAttribute('onclick', 'return trackWhatsAppConversion(this.href)');
    }
  });

  document.querySelectorAll('a[href^="tel:"]').forEach(function(el){
    if (!el.getAttribute('onclick')) {
      el.setAttribute('onclick', 'return trackCallConversion(this.href)');
    }
  });

  document.querySelectorAll('[data-action="whatsapp"]').forEach(function(el){
    if (!el.getAttribute('href')) {
      el.setAttribute('href', '$waUrl');
    }
    if (!el.getAttribute('onclick')) {
      el.setAttribute('onclick', 'return trackWhatsAppConversion(this.href)');
    }
  });

  document.querySelectorAll('[data-action="call"]').forEach(function(el){
    if (!el.getAttribute('href')) {
      el.setAttribute('href', 'tel:$PhoneNumber');
    }
    if (!el.getAttribute('onclick')) {
      el.setAttribute('onclick', 'return trackCallConversion(this.href)');
    }
  });

  window.addEventListener('scroll', function () {
    if (!backToTop) return;
    if (window.scrollY > 320) {
      backToTop.style.opacity = '1';
      backToTop.style.pointerEvents = 'auto';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.pointerEvents = 'none';
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
</script>
"@

    if ($Html -notmatch "data-mobile-toggle" -and $Html -match "<body[^>]*>") {
        $Html = $Html -replace "<body([^>]*)>", "<body`$1 data-js-enhanced=`"true`">"
    }

    if ($Html -notmatch "data-back-to-top") {
        $backToTop = @"
<a href="#" data-back-to-top aria-label="Back to top" style="position:fixed;right:20px;bottom:20px;z-index:9999;background:#111;color:#fff;padding:12px 14px;border-radius:999px;text-decoration:none;opacity:0;pointer-events:none;transition:opacity .25s ease;">↑</a>
"@
        if ($Html -match "</body>") {
            $Html = $Html -replace "</body>", "$backToTop`r`n$uxScript`r`n</body>"
        } else {
            $Html += "`r`n$backToTop`r`n$uxScript"
        }
    } elseif ($Html -notmatch "data-service-search" -or $Html -notmatch "trackWhatsAppConversion") {
        if ($Html -match "</body>") {
            $Html = $Html -replace "</body>", "$uxScript`r`n</body>"
        } else {
            $Html += "`r`n$uxScript"
        }
    }

    return $Html
}

function Ensure-ResponsiveStyles {
    param([string]$Html)

    $styleBlock = @"
<style>
  html { scroll-behavior:smooth; }
  img, video { max-width:100%; height:auto; }
  .container, .wrapper, .content, .inner { width:min(1200px, 92%); margin-inline:auto; }
  [data-mobile-menu] { display:none; }
  [data-mobile-menu].is-open { display:block; }
  [data-card-grid], .service-grid, .services-grid, .tile-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));
    gap:1rem;
  }
  [data-service-card], .card, .tile, .service-card {
    height:100%;
  }
  a, button { touch-action:manipulation; }
  @media (max-width: 860px) {
    nav ul, .nav-links, .desktop-nav { display:none !important; }
    [data-mobile-toggle] { display:inline-flex !important; align-items:center; justify-content:center; }
    h1 { font-size: clamp(2rem, 5vw, 3rem); }
    h2 { font-size: clamp(1.4rem, 4vw, 2rem); }
  }
  @media (min-width: 861px) {
    [data-mobile-toggle] { display:none !important; }
    [data-mobile-menu] { display:none !important; }
  }
</style>
"@

    if ($Html -notmatch "\[data-mobile-menu\] \{ display:none; \}") {
        if ($Html -match "</head>") {
            $Html = $Html -replace "</head>", "$styleBlock`r`n</head>"
        } else {
            $Html = $styleBlock + "`r`n" + $Html
        }
    }

    return $Html
}

function Ensure-Nav {
    param([string]$Html)

    $navMarkup = @"
<header style="position:sticky;top:0;z-index:999;background:#fff;border-bottom:1px solid #e5e7eb;">
  <div class="container" style="display:flex;align-items:center;justify-content:space-between;min-height:72px;gap:1rem;">
    <a href="/index.html" style="font-weight:700;text-decoration:none;color:inherit;">Gravity Group RSA</a>

    <nav aria-label="Primary navigation">
      <ul class="desktop-nav" style="display:flex;gap:1rem;list-style:none;margin:0;padding:0;">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/services/index.html">Services</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
      <button type="button" data-mobile-toggle aria-expanded="false" aria-controls="mobile-menu" style="display:none;background:#111;color:#fff;border:0;border-radius:10px;padding:10px 14px;cursor:pointer;">Menu</button>
      <div id="mobile-menu" data-mobile-menu style="padding:12px 0;">
        <div style="display:grid;gap:10px;">
          <a href="/index.html">Home</a>
          <a href="/about.html">About</a>
          <a href="/services/index.html">Services</a>
          <a href="/contact.html">Contact</a>
          <a data-action="call" href="tel:+27826300543">Call Now</a>
          <a data-action="whatsapp" href="https://wa.me/27826300543?text=Hi%20Gravity%20Group%20RSA%2C%20I%20need%20assistance.">WhatsApp</a>
        </div>
      </div>
    </nav>
  </div>
</header>
"@

    if ($Html -notmatch "Gravity Group RSA</a>" -and $Html -match "<body[^>]*>") {
        $Html = $Html -replace "(<body[^>]*>)", "`$1`r`n$navMarkup"
    } else {
        # Normalize common broken or alternate service index links
        $Html = $Html -replace 'href="/services_index\.html"', 'href="/services/index.html"'
        $Html = $Html -replace 'href="services_index\.html"', 'href="/services/index.html"'
        $Html = $Html -replace 'href="/services.html"', 'href="/services/index.html"'
        $Html = $Html -replace 'href="services.html"', 'href="/services/index.html"'
    }

    return $Html
}

function Ensure-ServiceSearch {
    param([string]$Html)

    if ($Html -notmatch "data-service-search") {
        $searchBox = @"
<section class="container" style="padding:1rem 0;">
  <label for="serviceSearch" style="display:block;font-weight:600;margin-bottom:8px;">Search services</label>
  <input id="serviceSearch" data-service-search type="search" placeholder="Search towing, jumpstart, tyre change, locksmith..." style="width:100%;padding:14px 16px;border:1px solid #d1d5db;border-radius:12px;" />
</section>
"@
        if ($Html -match "<main[^>]*>") {
            $Html = $Html -replace "(<main[^>]*>)", "`$1`r`n$searchBox"
        } elseif ($Html -match "</header>") {
            $Html = $Html -replace "</header>", "</header>`r`n$searchBox"
        }
    }

    return $Html
}

function Mark-ServiceCards {
    param([string]$Html)

    $Html = $Html -replace 'class="([^"]*service-card[^"]*)"', 'class="$1" data-service-card'
    $Html = $Html -replace 'class="([^"]*card[^"]*)"', 'class="$1" data-service-card'
    $Html = $Html -replace 'class="([^"]*tile[^"]*)"', 'class="$1" data-service-card'
    return $Html
}

function Ensure-CTAAttributes {
    param(
        [string]$Html,
        [string]$PhoneNumber,
        [string]$WhatsAppNumber
    )

    $waUrl = "https://wa.me/$WhatsAppNumber?text=Hi%20Gravity%20Group%20RSA%2C%20I%20need%20assistance."

    # Add onclick handlers to existing WhatsApp/tel links if missing
    $Html = [regex]::Replace(
        $Html,
        '<a([^>]*href="https://wa\.me/[^"]+"[^>]*)>',
        {
            param($m)
            $tag = $m.Groups[0].Value
            if ($tag -notmatch 'onclick=') {
                $tag = $tag -replace '>$', ' onclick="return trackWhatsAppConversion(this.href)">'
            }
            return $tag
        }
    )

    $Html = [regex]::Replace(
        $Html,
        '<a([^>]*href="tel:[^"]+"[^>]*)>',
        {
            param($m)
            $tag = $m.Groups[0].Value
            if ($tag -notmatch 'onclick=') {
                $tag = $tag -replace '>$', ' onclick="return trackCallConversion(this.href)">'
            }
            return $tag
        }
    )

    # Add fallback CTA block if none found
    if ($Html -notmatch 'href="https://wa\.me/' -and $Html -notmatch 'href="tel:') {
        $ctaBlock = @"
<section class="container" style="padding:1rem 0 2rem;">
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <a data-action="call" href="tel:$PhoneNumber" onclick="return trackCallConversion(this.href)" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:14px 18px;border-radius:12px;">Call Now</a>
    <a data-action="whatsapp" href="$waUrl" onclick="return trackWhatsAppConversion(this.href)" style="display:inline-block;background:#25D366;color:#111;text-decoration:none;padding:14px 18px;border-radius:12px;">WhatsApp Us</a>
  </div>
</section>
"@
        if ($Html -match "</main>") {
            $Html = $Html -replace "</main>", "$ctaBlock`r`n</main>"
        } elseif ($Html -match "</body>") {
            $Html = $Html -replace "</body>", "$ctaBlock`r`n</body>"
        } else {
            $Html += "`r`n$ctaBlock"
        }
    }

    return $Html
}

function Test-HtmlFile {
    param([string]$Path)

    $content = Read-Text $Path
    $issues = @()

    if ($content -notmatch "<title>") { $issues += "Missing <title>" }
    if ($content -notmatch "viewport") { $issues += "Missing viewport meta" }
    if ($content -notmatch "trackWhatsAppConversion") { $issues += "Missing WhatsApp conversion tracker" }
    if ($content -notmatch "trackCallConversion") { $issues += "Missing call conversion tracker" }

    $links = [regex]::Matches($content, 'href="([^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
    foreach ($link in $links) {
        if ($link -match '^(https?:|mailto:|tel:|#|javascript:)' ) { continue }

        $clean = $link.Split("?")[0].Split("#")[0]
        if ([string]::IsNullOrWhiteSpace($clean)) { continue }

        $candidate = $clean.TrimStart("/")
        $resolved = Join-Path $RepoPath $candidate
        if (-not (Test-Path $resolved)) {
            $issues += "Broken relative/local link in $(Split-Path $Path -Leaf): $link"
        }
    }

    return $issues
}

function Patch-HtmlFile {
    param(
        [string]$Path,
        [string]$AdsId,
        [string]$WhatsAppSendTo,
        [string]$CallSendTo,
        [string]$PhoneNumber,
        [string]$WhatsAppNumber
    )

    Write-Host "Patching $Path" -ForegroundColor Yellow
    Backup-File $Path
    $html = Read-Text $Path

    if ($html -notmatch 'name="viewport"') {
        if ($html -match "</head>") {
            $html = $html -replace "</head>", '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' + "`r`n</head>"
        } else {
            $html = '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' + "`r`n" + $html
        }
    }

    $html = Ensure-GoogleTrackingBlock -Html $html -AdsId $AdsId -WhatsAppSendTo $WhatsAppSendTo -CallSendTo $CallSendTo
    $html = Ensure-ResponsiveStyles -Html $html
    $html = Ensure-Nav -Html $html
    $html = Ensure-ServiceSearch -Html $html
    $html = Mark-ServiceCards -Html $html
    $html = Ensure-CTAAttributes -Html $html -PhoneNumber $PhoneNumber -WhatsAppNumber $WhatsAppNumber
    $html = Ensure-GlobalUXScript -Html $html -PhoneNumber $PhoneNumber -WhatsAppNumber $WhatsAppNumber

    Write-Text -Path $Path -Content $html
}

Write-Section "Validating repo path"
if (-not (Test-Path $RepoPath)) {
    throw "Repo path not found: $RepoPath"
}
Set-Location $RepoPath

if (-not (Test-Path ".git")) {
    throw "This folder is not a git repository: $RepoPath"
}

Write-Section "Ensuring git remote"
Ensure-Remote -RemoteUrl $RemoteUrl

Write-Section "Patching main HTML files"
$rootFiles = @(
    "index.html",
    "about.html",
    "contact.html",
    "services_index.html",
    "404.html"
)

foreach ($file in $rootFiles) {
    $full = Join-Path $RepoPath $file
    if (Test-Path $full) {
        Patch-HtmlFile -Path $full -AdsId $AdsId -WhatsAppSendTo $WhatsAppSendTo -CallSendTo $CallSendTo -PhoneNumber $PhoneNumber -WhatsAppNumber $WhatsAppNumber
    }
}

Write-Section "Patching /services HTML files"
$servicesDir = Join-Path $RepoPath "services"
if (Test-Path $servicesDir) {
    Get-ChildItem $servicesDir -Filter *.html -File | ForEach-Object {
        Patch-HtmlFile -Path $_.FullName -AdsId $AdsId -WhatsAppSendTo $WhatsAppSendTo -CallSendTo $CallSendTo -PhoneNumber $PhoneNumber -WhatsAppNumber $WhatsAppNumber
    }
}

Write-Section "Normalizing services index routing"
$rootServicesIndex = Join-Path $RepoPath "services_index.html"
$servicesIndex = Join-Path $RepoPath "services\index.html"
if ((Test-Path $rootServicesIndex) -and (Test-Path $servicesIndex)) {
    Copy-Item $rootServicesIndex $servicesIndex -Force
}

Write-Section "Cleaning obvious file issues"
$badJs = Join-Path $RepoPath "scripts\optimise-images.ja"
if (Test-Path $badJs) {
    $fixedJs = Join-Path $RepoPath "scripts\optimise-images.js"
    if (-not (Test-Path $fixedJs)) {
        Rename-Item $badJs "optimise-images.js"
        Write-Host "Renamed optimise-images.ja -> optimise-images.js" -ForegroundColor Green
    }
}

$badCssDir = Join-Path $RepoPath "assets\css'"
if (Test-Path $badCssDir) {
    Write-Warning "Suspicious folder detected: assets\css' . Review manually."
}

Write-Section "Running local debug audit"
$allHtml = Get-ChildItem $RepoPath -Recurse -Include *.html -File
$auditResults = @()
foreach ($file in $allHtml) {
    $issues = Test-HtmlFile -Path $file.FullName
    if ($issues.Count -gt 0) {
        foreach ($issue in $issues) {
            $auditResults += [PSCustomObject]@{
                File  = $file.FullName.Replace($RepoPath, ".")
                Issue = $issue
            }
        }
    }
}

$auditPath = Join-Path $RepoPath "debug-report.csv"
if ($auditResults.Count -gt 0) {
    $auditResults | Export-Csv -Path $auditPath -NoTypeInformation -Encoding UTF8
    Write-Warning "Debug audit found issues. Report saved to $auditPath"
    $auditResults | Format-Table -AutoSize
} else {
    "No issues detected in HTML audit at $(Get-Date -Format s)" | Out-File $auditPath -Encoding utf8
    Write-Host "No HTML audit issues detected." -ForegroundColor Green
}

Write-Section "Optional SEO generators"
if (Test-Path ".\scripts\generate-robots.js") {
    try {
        node .\scripts\generate-robots.js
        Write-Host "generate-robots.js completed" -ForegroundColor Green
    } catch {
        Write-Warning "generate-robots.js failed: $($_.Exception.Message)"
    }
}

if (Test-Path ".\scripts\generate-sitemap.js") {
    try {
        node .\scripts\generate-sitemap.js
        Write-Host "generate-sitemap.js completed" -ForegroundColor Green
    } catch {
        Write-Warning "generate-sitemap.js failed: $($_.Exception.Message)"
    }
}

if (Test-Path ".\scripts\seo-autofix.js") {
    try {
        node .\scripts\seo-autofix.js
        Write-Host "seo-autofix.js completed" -ForegroundColor Green
    } catch {
        Write-Warning "seo-autofix.js failed: $($_.Exception.Message)"
    }
}

if (Test-Path ".\scripts\a11y-fix.js") {
    try {
        node .\scripts\a11y-fix.js
        Write-Host "a11y-fix.js completed" -ForegroundColor Green
    } catch {
        Write-Warning "a11y-fix.js failed: $($_.Exception.Message)"
    }
}

Write-Section "Git status"
git status --short

Write-Section "Staging files"
git add .

Write-Section "Commit"
try {
    git commit -m $CommitMessage
    Write-Host "Commit created." -ForegroundColor Green
} catch {
    Write-Warning "Nothing new to commit, or commit failed: $($_.Exception.Message)"
}

Write-Section "Detecting current branch"
$branch = (git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($branch)) {
    $branch = "main"
}

Write-Section "Push to GitHub"
git push -u origin $branch

Write-Section "Done"
Write-Host "Deployment script completed." -ForegroundColor Green
Write-Host "Repo: $RepoPath"
Write-Host "Branch: $branch"
Write-Host "Remote: $RemoteUrl"
Write-Host "Debug report: $auditPath"