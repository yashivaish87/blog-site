import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FeaturedSection.css';

const FeaturedSection = ({ featuredPosts, trendingPosts }) => {
  // Only use the first featured post
  const mainPost = featuredPosts[0];

  return (
    <section className="featured-section">
      <div className="featured-main-full">
        <h2>Featured Post</h2>
        {mainPost && (
          <div className="featured-post-full hover-card">
            <div className="image-container">
              <img src={mainPost.image} alt={mainPost.title} />
              <div className="overlay">
                <div className="overlay-text">
                  <h3>{mainPost.title}</h3>
                  <p>{mainPost.summary}</p>
                  <Link to={`/blog/${mainPost.id}`} className="read-more-btn">Read Full</Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <div className="trending-sidebar">
        <h2>Trending Now</h2>
        <div className="trending-posts">
          {trendingPosts.map(post => (
            <div key={post.id} className="trending-post">
              <h4><Link to={`/blog/${post.id}`}>{post.title}</Link></h4>
              <span className="category">{post.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;