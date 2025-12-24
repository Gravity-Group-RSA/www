import "./styles/globals.css";

export const metadata = {
  title: "Gravity Group RSA — 24/7 Roadside Assistance",
  description:
    "Fast, reliable roadside assistance across South Africa. Towing, locksmith, tyre change, jumpstart & fuel delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
