import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Pages/Header'
import Footer from './components/Pages/Footer'
import BlogHomePage from './components/BlogHomePage'
import BlogCategoryPage from './components/Pages/BlogCategoryPage'
import BlogPage from './components/Pages/BlogPage'
import SubCategoryPage from './components/Pages/SubCategoryPage';


function App() {
  return (
    <BrowserRouter>
    <Header />

    <main className="main-content">
        <Routes>
          <Route path="/" element={<BlogHomePage />} />
          <Route path="/category/:categoryName" element={<BlogCategoryPage />} />
          <Route path="/category/:categoryName/:subCategoryName" element={<SubCategoryPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
    </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
