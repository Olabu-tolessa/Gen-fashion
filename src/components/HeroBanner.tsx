import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative h-[70vh] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Fashion Collection"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            New Season
            <span className="block text-gray-300">Collection</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Discover our latest curated selection of premium fashion pieces designed for the modern lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-white/10 to-transparent rounded-full -mr-32 -mb-32"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
    </div>
  );
};

export default HeroBanner;