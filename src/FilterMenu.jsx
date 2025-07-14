import React from 'react';

const FilterMenu = ({ selected, setSelected, products }) => {
  const categories = ['All', 'Electronics', 'Books', 'Clothing'];

  const countByCategory = (cat) => {
    if (cat === 'All') return products.length;
    return products.filter((p) => p.category === cat).length;
  };

  return (
    <div className="filter-menu">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? 'active' : ''}
          onClick={() => setSelected(cat)}
        >
          {cat} ({countByCategory(cat)})
        </button>
      ))}
      <button onClick={() => setSelected('All')} className="reset-btn">Reset</button>
    </div>
  );
};

export default FilterMenu;
