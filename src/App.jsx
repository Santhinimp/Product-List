import React, { useState } from 'react';
import FilterMenu from './FilterMenu';
import ProductList from './ProductList';
import './style.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, title: 'Smartphone', price: '$699', category: 'Electronics', rating: 4.5, inStock: true },
    { id: 2, title: 'Jeans', price: '$49', category: 'Clothing', rating: 4.2, inStock: false },
    { id: 3, title: 'Laptop', price: '$999', category: 'Electronics', rating: 3.9, inStock: true },
    { id: 4, title: 'T-shirt', price: '$25', category: 'Clothing', rating: 4.7, inStock: true },
    { id: 5, title: 'Novel', price: '$15', category: 'Books', rating: 4.1, inStock: false },
    { id: 6, title: 'Notebook', price: '$5', category: 'Books', rating: 3.8, inStock: true },
  ];

  return (
    <div className="app">
      <h1>Product List</h1>
      <FilterMenu selected={selectedCategory} setSelected={setSelectedCategory} products={products} />
      <ProductList products={products} selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
