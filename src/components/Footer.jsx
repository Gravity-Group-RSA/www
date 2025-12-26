import React from 'react'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>082 630 0543 | 079 096 3817</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@gravitygrouprsa.co.za</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Available 24/7</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/services" className="hover:text-blue-300">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Gravity Group RSA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer