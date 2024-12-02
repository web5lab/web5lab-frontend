import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at DeFi Protocol',
    content: 'Web5Lab delivered an exceptional DeFi solution that exceeded our expectations. Their expertise in blockchain technology is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder of CryptoTech',
    content: 'The teams deep understanding of blockchain architecture helped us build a secure and scalable platform. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Lead Developer at BlockChain Solutions',
    content: 'Working with Web5Lab was a game-changer for our project. Their innovative approach to smart contract development is impressive.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-gray-600">What our clients say about us</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-100 hover:border-blue-600 transition-colors">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-blue-600 fill-blue-600" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}