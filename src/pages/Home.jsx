import React from 'react'
import { Truck, Shield, Battery, Package } from 'lucide-react'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Trusted Partner on the Road
          </h1>
          <p className="text-xl mb-8">
            24/7 Roadside Assistance & Courier Services
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Truck className="w-12 h-12" />}
              title="Towing Services"
              description="24/7 professional towing assistance"
            />
            <ServiceCard 
              icon={<Shield className="w-12 h-12" />}
              title="Locksmith"
              description="Emergency lockout solutions"
            />
            <ServiceCard 
              icon={<Battery className="w-12 h-12" />}
              title="Battery Services"
              description="Jumpstart & battery delivery"
            />
            <ServiceCard 
              icon={<Package className="w-12 h-12" />}
              title="Courier Services"
              description="Reliable delivery solutions"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default Home