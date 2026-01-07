import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Resource Hub</h1>
        <p>Discover useful tools and websites organized by category</p>
      </header>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="category-icon">{category.icon}</div>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
