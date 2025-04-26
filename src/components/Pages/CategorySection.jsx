import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategorySection.css';

const CategorySection = ({ posts, categories }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1); // Track current page for each category
  const [selectedCategory, setSelectedCategory] = useState('All'); // Selected category
  const [isLoading, setIsLoading] = useState(false); // To indicate loading state

  const postsPerPage = 5; // Show 5 posts per page

  // Function to filter posts by category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when changing category
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  };

  // Sort posts by date in decreasing order (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination logic: Show 5 posts per page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = sortedPosts.slice(startIndex, endIndex);

  // Functions to handle page navigation
  const handleNextPage = () => {
    if (endIndex < filteredPosts.length) {
      setIsLoading(true); // Show loading indicator when next page is being loaded
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setIsLoading(true); // Show loading indicator when previous page is being loaded
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // Effect to simulate loading state when changing pages or categories
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false); // Hide loading state after data is loaded
    }, 500); // Simulate loading delay

    return () => clearTimeout(timeoutId); // Cleanup timeout on re-render
  }, [currentPage, selectedCategory]);

  return (
    <section className="category-section">
      <div className="category-nav">
        <h2>Latest Blog</h2>
        <div className="category-buttons">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Show a loading spinner while data is being fetched/loaded */}
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
      <>
        {postsToDisplay.length === 0 ? (
          <div className="no-posts-message">
            Oops! No blog for this category right now.
          </div>
        ) : (
        <div className="blog-list">
          {postsToDisplay.map((post) => (
            <div key={post.id} className="blog-item">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p className="author">By {post.author}</p>
                <p className="summary">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="read-more-btn">Read More</Link>
              </div>
            </div>
          ))}
        </div>
                
        )}
        </>
      )}

      {/* Pagination Buttons (Back and Next) */}
      <div className="pagination">
        <button
          className="pagination-btn back-btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1 || isLoading} // Disable if on the first page or loading
        >
          Back
        </button>
        <button
          className="pagination-btn next-btn"
          onClick={handleNextPage}
          disabled={endIndex >= filteredPosts.length || isLoading} // Disable if no more posts to load or loading
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default CategorySection;
