
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../../dataa/post';
// import '../styles/BlogCategoryPage.css'; 

const SubCategoryPage = () => {
    const { categoryName, subCategoryName } = useParams();
    const formattedSub = subCategoryName.replace(/-/g, ' ')

  // Filter first by category, then by subcategory
  const filteredPosts = posts.filter(post =>
    post.category.toLowerCase() === categoryName.toLowerCase() &&
    post.subcategory?.toLowerCase() === formattedSub.toLowerCase()
  );

  return (
    <div className="blog-category-page">
      <div className="category-banner">
        <h2>
          Posts in “{categoryName} → {subCategoryName}”
        </h2>
        <p>
          Here are our latest deep-dives in the "{subCategoryName}" sub-topic of "{categoryName}".
        </p>
      </div>
      <div className="category-content">
        {filteredPosts.length === 0 ? (
          <div className="no-posts-message">
            Oops! No blogs in this {categoryName} right now.
          </div>
        ) : (
          <div className="category-list">
            {filteredPosts.map(post => (
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
                  <Link
                    to={`/blog/${post.id}`}
                    className="read-more-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategoryPage;
