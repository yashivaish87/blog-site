import React,{useState, useRef, useEffect} from 'react'
import {X,Search, Facebook, Twitter, Instagram, Youtube, Menu } from 'lucide-react';
import '../styles/Header.css';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Link } from 'react-router-dom';

const navItems = [
    { label: "All", links: [] },
    { label: "Technology", links: ["Web Development", "Mobile Apps", "AI", "Gadgets"] },
    { label: "Travel", links: ["Destinations", "Tips", "Adventures", "Budget Travel"] },
    { label: "Food", links: ["Recipes", "Restaurants", "Cooking Tips", "Diets"] },
    { label: "Lifestyle", links: ["Minimalism", "Productivity", "Wellness", "Home"] },
    { label: "Fashion", links: ["Trends", "Sustainable", "Accessories", "Seasonal"] },
    { label: "Health", links: ["Fitness", "Mental Health", "Nutrition", "Medicine"] },
];

  
const Header = () => {

    const today = new Date().toLocaleDateString("en-US", { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
      });
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const searchRef = useRef(null);

    useEffect(() => {
        const onClickOutside = (e) => {
          if (
            showSearch &&
            searchRef.current &&
            !searchRef.current.contains(e.target)
          ) {
            setShowSearch(false);
          }
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, [showSearch]);
  
    useEffect(() => {
      if (menuOpen) {
        document.body.style.overflow = 'hidden'; // Disable body scrolling
      } else {
        document.body.style.overflow = 'auto'; // Enable body scrolling
      }
  
      // Cleanup on component unmount or menu toggle
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [menuOpen]);
    
  return (
      <>
        {/* ─── Top Bar ────────────────────────────────────────── */}
        <div className="top-bar">
        <div className="top-bar-left">
        <span >{today}</span>
        <span> | </span>
        <span>India</span>
        </div>

        <div className="social-icons">
        <Facebook className="social-icon1" />
        <Instagram className="social-icon2" />
        <Twitter className="social-icon3" />
        <Youtube className="social-icon4" />
        </div>
        </div>
                  
          
    
        {/* ─── Main Header ───────────────────────────────────── */}
        
        <header className="header">
        <div className="header-left">
            {/* hamburger: on mobile */}
                <button
                className="mobile-menu-button"
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
                >
                {menuOpen ? <X /> : <Menu />}
                    </button>
                    
            {/* logo */}
            <h1 className="blog-title">My_Blog</h1>
        

            {/* Navigation */}  
            {!menuOpen && (
            <nav className="nav desktop-nav">
                {navItems.map(item => (
                <div key={item.label} className="nav-item">
                    <Link to={item.label === "All" ? "/" : `/category/${item.label.toLowerCase()}`} className="nav-link">{item.label}
                    </Link>
                    {item.links.length > 0 && (
                    <div className="dropdown">
                        <ul>
                        {item.links.map(link => (
                            <li key={link} className="dropdown-item">
                            <Link to={`/category/${link.toLowerCase()}`}  onClick={() => setMenuOpen(false)}>{link}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                ))}
            </nav>
            )}
              </div>
              
              <div ref={searchRef} className="search-wrapper">
        {!showSearch && (
          <>
            <Button
              className="desktop-search-button"
              onClick={() => setShowSearch(true)}
              aria-label="Open search"
            >
              <Search size={20} />
            </Button>
            <Button
              className="mobile-search-button"
              onClick={() => setShowSearch(true)}
              aria-label="Open search"
            >
              <Search size={20} />
            </Button>
          </>
        )}

        {showSearch && (
            <div className="search-overlay">
                
                <Input
                className="search-input"
                placeholder="Search articles…"
                autoFocus
                />
                <Button className="search-button" >
                <Search size={10} />
                </Button>
            </div>
        )}
      </div>

          

        {/* ─── Mobile Navigation Drawer ─────────────────────── */}
        {menuOpen && (
        <div className="mobile-nav">
        <nav className="nav mobile-nav-links">
            {navItems.map(item=>(
            <div key={item.label} className="nav-item">
                <Link to={item.label === "All" ? "/" : `/category/${item.label.toLowerCase()}`} className="nav-link"  onClick={() => setMenuOpen(false)}>
                {item.label}
                </Link>
                
                {item.links.length>0 && (
                <div className="dropdown"><ul>
                    {item.links.map(l=> <li key={l}><Link to={`/category/${l.toLowerCase()}`}onClick={() => setMenuOpen(false)}>{l}</Link></li>)}
                </ul></div>
                )}
            </div>
            ))}
          </nav>
          
          {/* bring top-bar into menu at bottom */}
          <div className="top-bar mobile-top-bar">
              <div className="top-bar-left">
              <span>{today}</span><span> | </span><span>India</span>
              </div>
              <div className="social-icons">
              <Facebook className="social-icon1" />
              <Instagram className="social-icon2" />
              <Twitter className="social-icon3" />
              <Youtube className="social-icon4" />
              </div>
          </div>
        </div>
        )}
        </header>
      </>
  )
}

export default Header