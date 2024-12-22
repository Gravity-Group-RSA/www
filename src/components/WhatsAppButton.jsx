import React from 'react'
import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <a href="https://wa.me/27826300543" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700">
        <MessageCircle />
      </a>
    </div>
  )
}

export default WhatsAppButton