export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  wishlist: string[];
}

export type CategoryType = 'all' | 'women' | 'men' | 'accessories' | 'shoes';