import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X, Filter } from 'lucide-react';
import { CategoryType } from '../types';

interface HeaderProps {
  onCategoryChange: (category: CategoryType) => void;
  onCartOpen: () => void;
  onWishlistOpen: () => void;
  onProfileOpen: () => void;
  onFiltersToggle: () => void;
  cartItemCount: number;
  wishlistItemCount: number;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ 
  onCategoryChange, 
  onCartOpen,
  onWishlistOpen,
  onProfileOpen,
  onFiltersToggle,
  cartItemCount,
  wishlistItemCount,
  onSearchChange,
  searchQuery
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories = [
    { id: 'all' as CategoryType, name: 'All' },
    { id: 'women' as CategoryType, name: 'Women' },
    { id: 'men' as CategoryType, name: 'Men' },
    { id: 'accessories' as CategoryType, name: 'Accessories' },
    { id: 'shoes' as CategoryType, name: 'Shoes' }
  ];

  const handleCategoryClick = (category: CategoryType) => {
    setActiveCategory(category);
    onCategoryChange(category);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">FASHION</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                  activeCategory === category.id
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-4'
                    : 'text-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onFiltersToggle}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Filter className="h-6 w-6" />
            </button>
            <button 
              onClick={onWishlistOpen}
              className="relative text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Heart className="h-6 w-6" />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </button>
            <button 
              onClick={onProfileOpen}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <User className="h-6 w-6" />
            </button>
            <button
              onClick={onCartOpen}
              className="relative text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-3 border-t">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
              placeholder="Search products..."
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-gray-900 ${
                    activeCategory === category.id ? 'text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;