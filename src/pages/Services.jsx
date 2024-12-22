import React from 'react'
import { Truck, Shield, Battery, Package, Clock, CheckCircle } from 'lucide-react'

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional 24/7 Roadside & Courier Solutions</p>
        </div>
      </div>

      {/* Services Detail Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          <ServiceDetail
            icon={<Truck />}
            title="Towing Services"
            description="Professional 24/7 towing service for all vehicle types"
            features={[
              "Emergency towing",
              "Accident recovery",
              "Breakdown assistance",
              "Long-distance towing",
              "24/7 availability"
            ]}
          />

          <ServiceDetail
            icon={<Shield />}
            title="Locksmith Services"
            description="Expert locksmith solutions for any situation"
            features={[
              "Emergency lockout assistance",
              "Key replacement",
              "Lock repairs",
              "Security upgrades",
              "24/7 emergency response"
            ]}
          />

          <ServiceDetail
            icon={<Battery />}
            title="Battery Services"
            description="Complete battery solutions for your vehicle"
            features={[
              "Battery jumpstart",
              "Battery replacement",
              "Battery testing",
              "Battery delivery",
              "All vehicle types supported"
            ]}
          />

          <ServiceDetail
            icon={<Package />}
            title="Courier Services"
            description="Reliable and efficient delivery solutions"
            features={[
              "Same-day delivery",
              "Nationwide coverage",
              "Real-time tracking",
              "Secure handling",
              "Express delivery options"
            ]}
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
          <p className="mb-6">Our team is available 24/7 to help you</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:0826300543" 
              className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold hover:bg-blue-100"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/27826300543" 
              className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceDetail = ({ icon, title, description, features }) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="flex items-center mb-6">
      <div className="text-blue-600 mr-4">{icon}</div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Services