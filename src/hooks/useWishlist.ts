import { useState, useEffect } from 'react';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('fashionWishlist');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fashionWishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (productId: string) => {
    setWishlistItems(prev => [...prev, productId]);
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(id => id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.includes(productId);
  };

  const toggleWishlist = (productId: string) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist
  };
};