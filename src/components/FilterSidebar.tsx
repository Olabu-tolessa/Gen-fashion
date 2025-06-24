import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSidebarProps {
  onPriceRangeChange: (min: number, max: number) => void;
  onBrandFilter: (brands: string[]) => void;
  selectedBrands: string[];
  priceRange: { min: number; max: number };
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onPriceRangeChange,
  onBrandFilter,
  selectedBrands,
  priceRange
}) => {
  const [isPriceOpen, setIsPriceOpen] = React.useState(true);
  const [isBrandOpen, setIsBrandOpen] = React.useState(true);

  const brands = ['LUXE', 'MODERN', 'ARTISAN', 'GENTLEMAN', 'URBAN', 'COUTURE'];

  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandFilter(selectedBrands.filter(b => b !== brand));
    } else {
      onBrandFilter([...selectedBrands, brand]);
    }
  };

  return (
    <div className="w-64 bg-white p-6 border-r border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 mb-3"
        >
          Price Range
          {isPriceOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {isPriceOpen && (
          <div className="space-y-3">
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min || ''}
                onChange={(e) => onPriceRangeChange(Number(e.target.value) || 0, priceRange.max)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max || ''}
                onChange={(e) => onPriceRangeChange(priceRange.min, Number(e.target.value) || 1000)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onPriceRangeChange(0, 100)}
                className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                Under $100
              </button>
              <button
                onClick={() => onPriceRangeChange(100, 200)}
                className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                $100-$200
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <button
          onClick={() => setIsBrandOpen(!isBrandOpen)}
          className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 mb-3"
        >
          Brand
          {isBrandOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {isBrandOpen && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span className="ml-2 text-sm text-gray-600">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;