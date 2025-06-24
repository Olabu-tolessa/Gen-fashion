import { Product } from '../types';

export const products: Product[] = [
  // Women's Collection
  {
    id: '1',
    name: 'Elegant Silk Blouse',
    brand: 'LUXE',
    price: 128,
    originalPrice: 160,
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    subcategory: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Black', 'Navy'],
    description: 'Luxurious silk blouse with modern tailoring and timeless elegance.',
    features: ['100% Silk', 'Dry Clean Only', 'Regular Fit', 'Button Closure'],
    inStock: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: '2',
    name: 'Classic Tailored Blazer',
    brand: 'MODERN',
    price: 245,
    images: [
      'https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    subcategory: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal'],
    description: 'Professional blazer with contemporary styling and premium construction.',
    features: ['Wool Blend', 'Fully Lined', 'Two Button Closure', 'Peak Lapels'],
    inStock: true,
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Elegant Evening Dress',
    brand: 'COUTURE',
    price: 320,
    originalPrice: 400,
    images: [
      'https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Burgundy'],
    description: 'Sophisticated evening dress with impeccable draping and fit.',
    features: ['Silk Chiffon', 'Side Zip', 'Fully Lined', 'Midi Length'],
    inStock: true,
    rating: 4.9,
    reviewCount: 78
  },
  {
    id: '4',
    name: 'Cashmere Sweater',
    brand: 'LUXE',
    price: 185,
    images: [
      'https://images.pexels.com/photos/7679735/pexels-photo-7679735.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    subcategory: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Black'],
    description: 'Ultra-soft cashmere sweater with relaxed fit and luxurious feel.',
    features: ['100% Cashmere', 'Hand Wash', 'Relaxed Fit', 'Crew Neck'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '5',
    name: 'High-Waisted Trousers',
    brand: 'MODERN',
    price: 145,
    images: [
      'https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    subcategory: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Camel'],
    description: 'Tailored high-waisted trousers with contemporary silhouette.',
    features: ['Wool Blend', 'High Waist', 'Straight Leg', 'Side Zip'],
    inStock: true,
    rating: 4.6,
    reviewCount: 203
  },
  {
    id: '6',
    name: 'Silk Midi Skirt',
    brand: 'COUTURE',
    price: 165,
    images: [
      'https://images.pexels.com/photos/7679745/pexels-photo-7679745.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    subcategory: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Burgundy', 'Emerald'],
    description: 'Flowing silk midi skirt with elegant drape and movement.',
    features: ['100% Silk', 'A-Line Cut', 'Side Zip', 'Midi Length'],
    inStock: true,
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: '7',
    name: 'Wool Coat',
    brand: 'LUXE',
    price: 395,
    originalPrice: 495,
    images: [
      'https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'women',
    subcategory: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Black', 'Gray'],
    description: 'Premium wool coat with timeless design and superior warmth.',
    features: ['100% Wool', 'Fully Lined', 'Double Breasted', 'Belt Included'],
    inStock: true,
    rating: 4.9,
    reviewCount: 67
  },

  // Men's Collection
  {
    id: '8',
    name: 'Modern Dress Shirt',
    brand: 'GENTLEMAN',
    price: 95,
    images: [
      'https://images.pexels.com/photos/7679767/pexels-photo-7679767.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink'],
    description: 'Contemporary dress shirt with superior comfort and style.',
    features: ['Cotton Blend', 'Wrinkle Resistant', 'Spread Collar', 'French Cuffs'],
    inStock: true,
    rating: 4.6,
    reviewCount: 203
  },
  {
    id: '9',
    name: 'Tailored Suit Jacket',
    brand: 'GENTLEMAN',
    price: 425,
    images: [
      'https://images.pexels.com/photos/7679770/pexels-photo-7679770.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    subcategory: 'outerwear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Charcoal', 'Black'],
    description: 'Expertly tailored suit jacket with modern fit and classic styling.',
    features: ['Wool Blend', 'Half Canvas', 'Two Button', 'Side Vents'],
    inStock: true,
    rating: 4.8,
    reviewCount: 145
  },
  {
    id: '10',
    name: 'Casual Polo Shirt',
    brand: 'URBAN',
    price: 75,
    images: [
      'https://images.pexels.com/photos/7679775/pexels-photo-7679775.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White', 'Gray', 'Green'],
    description: 'Premium polo shirt with comfortable fit and refined details.',
    features: ['Pima Cotton', 'Three Button', 'Ribbed Collar', 'Side Vents'],
    inStock: true,
    rating: 4.5,
    reviewCount: 189
  },
  {
    id: '11',
    name: 'Chino Trousers',
    brand: 'MODERN',
    price: 125,
    images: [
      'https://images.pexels.com/photos/7679780/pexels-photo-7679780.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    subcategory: 'pants',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Olive', 'Black'],
    description: 'Classic chino trousers with modern tailoring and versatile styling.',
    features: ['Cotton Twill', 'Flat Front', 'Tapered Leg', 'Belt Loops'],
    inStock: true,
    rating: 4.7,
    reviewCount: 234
  },
  {
    id: '12',
    name: 'Merino Wool Sweater',
    brand: 'LUXE',
    price: 165,
    images: [
      'https://images.pexels.com/photos/7679785/pexels-photo-7679785.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    subcategory: 'sweaters',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Gray', 'Burgundy', 'Black'],
    description: 'Premium merino wool sweater with exceptional softness and warmth.',
    features: ['100% Merino Wool', 'V-Neck', 'Ribbed Trim', 'Machine Washable'],
    inStock: true,
    rating: 4.8,
    reviewCount: 167
  },
  {
    id: '13',
    name: 'Denim Jacket',
    brand: 'URBAN',
    price: 135,
    images: [
      'https://images.pexels.com/photos/7679790/pexels-photo-7679790.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    subcategory: 'outerwear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Indigo', 'Black', 'Light Wash'],
    description: 'Classic denim jacket with modern fit and premium construction.',
    features: ['100% Cotton Denim', 'Button Front', 'Chest Pockets', 'Regular Fit'],
    inStock: true,
    rating: 4.6,
    reviewCount: 198
  },
  {
    id: '14',
    name: 'Formal Trousers',
    brand: 'GENTLEMAN',
    price: 155,
    images: [
      'https://images.pexels.com/photos/7679795/pexels-photo-7679795.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'men',
    subcategory: 'pants',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Navy', 'Charcoal', 'Black'],
    description: 'Elegant formal trousers with impeccable tailoring and comfort.',
    features: ['Wool Blend', 'Flat Front', 'Straight Leg', 'Unfinished Hem'],
    inStock: true,
    rating: 4.7,
    reviewCount: 123
  },

  // Accessories Collection
  {
    id: '15',
    name: 'Minimalist Leather Handbag',
    brand: 'ARTISAN',
    price: 189,
    originalPrice: 220,
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    subcategory: 'bags',
    sizes: ['One Size'],
    colors: ['Tan', 'Black', 'Cognac'],
    description: 'Handcrafted leather handbag with clean lines and functional design.',
    features: ['Italian Leather', 'Interior Pockets', 'Adjustable Strap', 'Magnetic Closure'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '16',
    name: 'Silk Scarf',
    brand: 'LUXE',
    price: 85,
    images: [
      'https://images.pexels.com/photos/7679800/pexels-photo-7679800.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    subcategory: 'scarves',
    sizes: ['One Size'],
    colors: ['Floral', 'Geometric', 'Abstract'],
    description: 'Luxurious silk scarf with artistic prints and versatile styling.',
    features: ['100% Silk', 'Hand Rolled Edges', 'Square Cut', 'Multiple Patterns'],
    inStock: true,
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: '17',
    name: 'Leather Belt',
    brand: 'ARTISAN',
    price: 95,
    images: [
      'https://images.pexels.com/photos/7679805/pexels-photo-7679805.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    subcategory: 'belts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Tan'],
    description: 'Premium leather belt with classic buckle and refined craftsmanship.',
    features: ['Full Grain Leather', 'Metal Buckle', 'Adjustable', 'Gift Box Included'],
    inStock: true,
    rating: 4.8,
    reviewCount: 234
  },
  {
    id: '18',
    name: 'Designer Sunglasses',
    brand: 'MODERN',
    price: 145,
    images: [
      'https://images.pexels.com/photos/7679810/pexels-photo-7679810.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    subcategory: 'eyewear',
    sizes: ['One Size'],
    colors: ['Black', 'Tortoise', 'Gold'],
    description: 'Stylish sunglasses with UV protection and contemporary design.',
    features: ['UV400 Protection', 'Polarized Lenses', 'Metal Frame', 'Case Included'],
    inStock: true,
    rating: 4.5,
    reviewCount: 167
  },
  {
    id: '19',
    name: 'Crossbody Bag',
    brand: 'URBAN',
    price: 125,
    images: [
      'https://images.pexels.com/photos/7679815/pexels-photo-7679815.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    subcategory: 'bags',
    sizes: ['One Size'],
    colors: ['Black', 'Tan', 'Navy'],
    description: 'Versatile crossbody bag perfect for everyday use and travel.',
    features: ['Nylon Material', 'Adjustable Strap', 'Multiple Compartments', 'Water Resistant'],
    inStock: true,
    rating: 4.4,
    reviewCount: 198
  },
  {
    id: '20',
    name: 'Wool Beanie',
    brand: 'URBAN',
    price: 45,
    images: [
      'https://images.pexels.com/photos/7679820/pexels-photo-7679820.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    subcategory: 'hats',
    sizes: ['One Size'],
    colors: ['Black', 'Gray', 'Navy', 'Burgundy'],
    description: 'Cozy wool beanie with classic fit and modern styling.',
    features: ['100% Wool', 'Ribbed Knit', 'Fold-Over Cuff', 'One Size Fits Most'],
    inStock: true,
    rating: 4.3,
    reviewCount: 145
  },
  {
    id: '21',
    name: 'Leather Wallet',
    brand: 'GENTLEMAN',
    price: 75,
    images: [
      'https://images.pexels.com/photos/7679825/pexels-photo-7679825.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    subcategory: 'wallets',
    sizes: ['One Size'],
    colors: ['Black', 'Brown'],
    description: 'Classic leather wallet with multiple card slots and bill compartment.',
    features: ['Genuine Leather', '8 Card Slots', 'Bill Compartment', 'RFID Blocking'],
    inStock: true,
    rating: 4.7,
    reviewCount: 289
  },

  // Shoes Collection
  {
    id: '22',
    name: 'Designer Sneakers',
    brand: 'URBAN',
    price: 165,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    subcategory: 'sneakers',
    sizes: ['7', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['White', 'Black', 'Gray'],
    description: 'Premium sneakers combining comfort with contemporary style.',
    features: ['Leather Upper', 'Cushioned Sole', 'Breathable Lining', 'Rubber Outsole'],
    inStock: true,
    rating: 4.8,
    reviewCount: 312
  },
  {
    id: '23',
    name: 'Oxford Dress Shoes',
    brand: 'GENTLEMAN',
    price: 225,
    images: [
      'https://images.pexels.com/photos/7679830/pexels-photo-7679830.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    subcategory: 'dress',
    sizes: ['7', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Black', 'Brown'],
    description: 'Classic Oxford dress shoes with premium leather and traditional craftsmanship.',
    features: ['Full Grain Leather', 'Leather Sole', 'Goodyear Welt', 'Lace-Up'],
    inStock: true,
    rating: 4.9,
    reviewCount: 178
  },
  {
    id: '24',
    name: 'Ankle Boots',
    brand: 'MODERN',
    price: 185,
    images: [
      'https://images.pexels.com/photos/7679835/pexels-photo-7679835.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    subcategory: 'boots',
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['Black', 'Brown', 'Tan'],
    description: 'Versatile ankle boots with modern silhouette and premium materials.',
    features: ['Leather Upper', 'Side Zip', 'Block Heel', 'Cushioned Insole'],
    inStock: true,
    rating: 4.6,
    reviewCount: 234
  },
  {
    id: '25',
    name: 'High Heels',
    brand: 'COUTURE',
    price: 195,
    originalPrice: 245,
    images: [
      'https://images.pexels.com/photos/7679840/pexels-photo-7679840.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    subcategory: 'heels',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'Nude', 'Red'],
    description: 'Elegant high heels with sophisticated design and comfortable fit.',
    features: ['Patent Leather', '4-inch Heel', 'Pointed Toe', 'Cushioned Footbed'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '26',
    name: 'Loafers',
    brand: 'GENTLEMAN',
    price: 155,
    images: [
      'https://images.pexels.com/photos/7679845/pexels-photo-7679845.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    subcategory: 'casual',
    sizes: ['7', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['Brown', 'Black', 'Navy'],
    description: 'Classic loafers with timeless style and exceptional comfort.',
    features: ['Suede Upper', 'Leather Lining', 'Penny Strap', 'Rubber Sole'],
    inStock: true,
    rating: 4.5,
    reviewCount: 198
  },
  {
    id: '27',
    name: 'Running Shoes',
    brand: 'URBAN',
    price: 135,
    images: [
      'https://images.pexels.com/photos/7679850/pexels-photo-7679850.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    subcategory: 'athletic',
    sizes: ['7', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
    colors: ['White', 'Black', 'Blue', 'Gray'],
    description: 'Performance running shoes with advanced cushioning and support.',
    features: ['Mesh Upper', 'EVA Midsole', 'Breathable', 'Lightweight'],
    inStock: true,
    rating: 4.6,
    reviewCount: 267
  },
  {
    id: '28',
    name: 'Ballet Flats',
    brand: 'MODERN',
    price: 95,
    images: [
      'https://images.pexels.com/photos/7679855/pexels-photo-7679855.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shoes',
    subcategory: 'flats',
    sizes: ['6', '7', '8', '9', '10'],
    colors: ['Black', 'Nude', 'Navy', 'Pink'],
    description: 'Comfortable ballet flats with elegant design and versatile styling.',
    features: ['Leather Upper', 'Cushioned Insole', 'Flexible Sole', 'Bow Detail'],
    inStock: true,
    rating: 4.4,
    reviewCount: 189
  }
];