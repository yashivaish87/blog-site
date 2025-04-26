import React from 'react'
import {Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import '../styles/Footer.css';


const Footer = () => {
  return (
      <>
         <footer className="site-footer">
        <div className="footer-content">
            <div className="footer-section">
              <h2>About</h2>
            <p>A modern blog built with React UI. Stay informed with the latest stories in tech, world, health & more.</p>
            <div className="social-footer-section">
                <h2>Follow Us</h2>
                <div className="footer-social">
                  <Facebook className="social-icon1" size={20} />
                  <Instagram className="social-icon2" size={20}/>
                  <Twitter className="social-icon3" size={20} />
                  <Youtube className="social-icon4" size={20} />
                </div>
            </div>
          </div>
            
            <div className="footer-section">
                <h2>Categories</h2>
              <ul className="category-links">
                {[
                "Apps", "Business", "Fashion",
                "Food", "Gadget", "Gaming", "Health", "Lifestyle", "Mobile", "Movie",
                "Music", "News", "Politics", "Review", "Science",
                "Sports", "Startup", "Tech", "Travel", "World", "Online Marketing", "Email Marketing"
                  ].map(category => (
                <li key={category}>
                  <a href="#">{category}</a>
                </li>
                ))}
              </ul>
            </div>
            
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} My_Blog. All rights reserved.</p>
        </div>
      </footer> 
      </>
  )
}

export default Footer