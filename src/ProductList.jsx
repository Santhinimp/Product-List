import React from 'react';
import ProductCard from './ProductCard';

/**
 * ProductList filters products based on selectedCategory using .filter()
 * and maps them into ProductCard components.
 * Props 'products' and 'selectedCategory' are received from App.jsx.
 */
const ProductList = ({ products, selectedCategory }) => {
  const filtered = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="product-list">
      {filtered.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
