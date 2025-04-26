import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../../dataa/post';
import '../styles/BlogCategoryPage.css'; 

const BlogCategoryPage = () => {
  const { categoryName } = useParams();

  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="blog-category-page">
      <div className="category-banner">
        <h2>Posts in "{categoryName}"</h2>
        <p >
          Explore our latest articles and insights in the "{categoryName}" category. Stay updated with the latest trends and topics that matter to you.
        </p>
      </div>
      <div className="category-content">
      {filteredPosts.length === 0 ? (
        <div className="no-posts-message">
        Oops! No blog for this category right now.
      </div>
        ) : (
            <div className="category-list">
              {filteredPosts.map((post) => (
                <div key={post.id} className="post-preview">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <div className="post-meta">
                      <span>By {post.author}</span> | <span>{post.date}</span>
                    </div>
                    <p>{post.excerpt}</p>
                    <Link to={`/post/${post.id}`} className="read-more-btn">Read More</Link>
                  </div>
                </div>
              ))}
              </div>
        )}
        </div>
    </div>
  );
};

export default BlogCategoryPage;
