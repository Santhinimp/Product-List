import React from 'react';

const ProductCard = ({ product }) => {
  const { title, price, category, rating, inStock } = product;

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Electronics': return '#FFE5B4';
      case 'Books': return '#E6E6FA';
      case 'Clothing': return '#D0F0C0';
      default: return '#fff';
    }
  };

  return (
    <div className="product-card" style={{ backgroundColor: getCategoryColor(category) }}>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p className={rating > 4 ? 'highlight' : ''}>Rating: {rating}</p>
      {!inStock && <span className="badge">Out of Stock</span>}
    </div>
  );
};

export default ProductCard;
