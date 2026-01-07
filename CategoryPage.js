import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, resources } from '../data';
import './CategoryPage.css';

function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const categoryIdNum = parseInt(categoryId);
  
  const category = categories.find(cat => cat.id === categoryIdNum);
  const categoryResources = resources.filter(res => res.cat === categoryIdNum);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleResourceClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getPreviewUrl = (url) => {
    // For YouTube channels, use YouTube's oEmbed API
    if (url.includes('youtube.com')) {
      const channelId = url.match(/@([^/?]+)/)?.[1];
      if (channelId) {
        return `https://www.youtube.com/embed?listType=user_uploads&list=${channelId}`;
      }
    }
    // For other sites, use a screenshot service or iframe
    // Using a simple iframe approach (some sites may block this)
    return url;
  };

  if (!category) {
    return (
      <div className="category-page">
        <div className="error-message">
          <h2>Category not found</h2>
          <button onClick={handleBackClick}>Go Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <header className="category-header">
        <button className="back-button" onClick={handleBackClick}>
          ← Back to Home
        </button>
        <div className="category-title">
          <span className="category-icon-large">{category.icon}</span>
          <h1>{category.name}</h1>
        </div>
      </header>
      
      <div className="resources-grid">
        {categoryResources.map((resource, index) => (
          <div
            key={index}
            className="resource-card"
            onClick={() => handleResourceClick(resource.url)}
          >
            <div className="resource-preview">
              {resource.url.includes('youtube.com') ? (
                <div className="youtube-preview">
                  <div className="youtube-icon">📺</div>
                  <p>YouTube Channel</p>
                </div>
              ) : (
                <div className="website-preview">
                  <div className="preview-icon">🌐</div>
                  <p className="preview-url">{new URL(resource.url).hostname}</p>
                </div>
              )}
            </div>
            <div className="resource-info">
              <h3>{resource.name}</h3>
              <p>{resource.desc}</p>
              <div className="resource-link">
                Visit Website →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
