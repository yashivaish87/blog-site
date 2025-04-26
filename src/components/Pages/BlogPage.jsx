import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../../dataa/post'; 
import '../styles/BlogPage.css';

const BlogPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="not-found">Post not found.</div>;
  }

  return (
    <div className="blog-post-page">
      <div className="post-header">
        <h1>{post.title}</h1>
        <p className="post-meta">
          By {post.author} | {post.date}
        </p>
      </div>

      {post.image && (
        <img src={post.image} alt={post.title} className="post-image" />
      )}

      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
