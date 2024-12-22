import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-800 text-white p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone className="w-4 h-4" />
            <span>082 630 0543 | 079 096 3817</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>info@gravitygrouprsa.co.za</span>
            <div className="flex items-center space-x-2 ml-4">
              <a 
                href="https://wa.me/27826300543" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-blue-900 hover:bg-blue-700 text-white px-3 py-1 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-800">
              Gravity Group RSA
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-800">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-800">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-800">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar