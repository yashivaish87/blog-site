import React from 'react'
import posts from '../dataa/post';
import './styles/Blog.Home.css'
import FeaturedSection from './Pages/FeaturedSection';

import CategorySection from './Pages/CategorySection';
 

const BlogHomePage = () => {
  const featuredPosts = posts.filter(post => post.featured);
  const trendingPosts = posts.filter(post => post.trending);

  return (
    <>
      
      <FeaturedSection featuredPosts={featuredPosts} trendingPosts={trendingPosts} />
      <CategorySection posts={posts} categories={['All', 'Technology','Travel', 'Food', 'Lifestyle','Fashion','Health']} />
      
    </>
  )
}

export default BlogHomePage