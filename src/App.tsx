import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';
import FilterSidebar from './components/FilterSidebar';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import { useWishlist } from './hooks/useWishlist';
import { Product, CategoryType } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const {
    cartItems,
    isOpen: isCartOpen,
    setIsOpen: setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const {
    wishlistItems,
    toggleWishlist
  } = useWishlist();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

      return matchesCategory && matchesSearch && matchesBrand && matchesPrice;
    });
  }, [selectedCategory, searchQuery, selectedBrands, priceRange]);

  const wishlistProducts = useMemo(() => {
    return products.filter(product => wishlistItems.includes(product.id));
  }, [wishlistItems]);

  const handleAddToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, size, color);
    }
    setSelectedProduct(null);
  };

  const handleWishlistAddToCart = (product: Product) => {
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCategoryChange={setSelectedCategory}
        onCartOpen={() => setIsCartOpen(true)}
        onWishlistOpen={() => setShowWishlist(true)}
        onProfileOpen={() => setShowProfile(true)}
        onFiltersToggle={() => setShowFilters(!showFilters)}
        cartItemCount={getTotalItems()}
        wishlistItemCount={wishlistItems.length}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* Hero Banner - only show on 'all' category */}
      {selectedCategory === 'all' && <HeroBanner />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Products' : 
               selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h1>
            <p className="text-gray-600 mt-1">{filteredProducts.length} products found</p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <FilterSidebar
              onPriceRangeChange={(min, max) => setPriceRange({ min, max })}
              onBrandFilter={setSelectedBrands}
              selectedBrands={selectedBrands}
              priceRange={priceRange}
            />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
              <div className="bg-white w-80 h-full overflow-y-auto">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <FilterSidebar
                  onPriceRangeChange={(min, max) => setPriceRange({ min, max })}
                  onBrandFilter={setSelectedBrands}
                  selectedBrands={selectedBrands}
                  priceRange={priceRange}
                />
              </div>
            </div>
          )}

          {/* Products */}
          <div className="flex-1">
            <ProductGrid
              products={filteredProducts}
              onProductClick={setSelectedProduct}
              onWishlistToggle={toggleWishlist}
              wishlistItems={wishlistItems}
            />
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onWishlistToggle={toggleWishlist}
          isInWishlist={wishlistItems.includes(selectedProduct.id)}
        />
      )}

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />

      {/* Wishlist Sidebar */}
      <Wishlist
        isOpen={showWishlist}
        onClose={() => setShowWishlist(false)}
        wishlistItems={wishlistProducts}
        onRemoveFromWishlist={toggleWishlist}
        onAddToCart={handleWishlistAddToCart}
        onProductClick={setSelectedProduct}
      />

      {/* Profile Modal */}
      <Profile
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </div>
  );
}

export default App;