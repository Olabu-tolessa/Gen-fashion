import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onWishlistToggle: (productId: string) => void;
  isInWishlist: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onProductClick, 
  onWishlistToggle, 
  isInWishlist 
}) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => onProductClick(product)}
        />
        
        {/* Wishlist Button */}
        <button
          onClick={() => onWishlistToggle(product.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <Heart 
            className={`h-5 w-5 transition-colors ${
              isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`} 
          />
        </button>

        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            Sale
          </div>
        )}

        {/* Quick View on Hover */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => onProductClick(product)}
            className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
          <h3 
            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
            onClick={() => onProductClick(product)}
          >
            {product.name}
          </h3>
        </div>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            <span className="ml-1 text-sm text-gray-400">({product.reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                   color.toLowerCase() === 'black' ? '#000000' :
                                   color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                   color.toLowerCase() === 'gray' || color.toLowerCase() === 'charcoal' ? '#6b7280' :
                                   color.toLowerCase() === 'tan' || color.toLowerCase() === 'cognac' ? '#d2b48c' :
                                   color.toLowerCase() === 'ivory' ? '#fffff0' :
                                   color.toLowerCase() === 'burgundy' ? '#800020' :
                                   color.toLowerCase() === 'pink' ? '#ffc0cb' :
                                   color.toLowerCase().includes('blue') ? '#3b82f6' : '#9ca3af'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;