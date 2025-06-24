import React from 'react';
import { X, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart,
  onProductClick
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-end p-4 z-50">
      <div className="bg-white w-full sm:w-96 h-full sm:h-auto sm:max-h-[80vh] rounded-t-lg sm:rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">My Wishlist ({wishlistItems.length})</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your wishlist is empty</p>
              <p className="text-sm text-gray-400 mt-2">Save items you love for later</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((product) => (
                <div key={product.id} className="flex space-x-4 border-b pb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg cursor-pointer"
                    onClick={() => onProductClick(product)}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-sm font-medium text-gray-900 truncate cursor-pointer hover:text-gray-700"
                      onClick={() => onProductClick(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500">{product.brand}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">${product.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="text-xs bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors flex items-center space-x-1"
                      >
                        <ShoppingBag className="h-3 w-3" />
                        <span>Add to Cart</span>
                      </button>
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-xs text-red-500 hover:text-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;