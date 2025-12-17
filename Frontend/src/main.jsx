import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage'
import SignUp from './landing_page/user/SignUp';
import Login from './landing_page/user/Login';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage  from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductsPage from './landing_page/products/ProductsPage';
import Navbar from "./landing_page/Navbar"
import Footer from "./landing_page/Footer";
import NotFound from './landing_page/NotFound';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar/>
       <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/signup" element={<SignUp />} />
           <Route path="/login" element={<Login />} />
           <Route path="/pricing" element={<PricingPage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/support" element={<SupportPage />} />
           <Route path="/products" element={<ProductsPage />} />
           <Route path="*" element={<NotFound />} />           
       </Routes>
      <Footer/>
    </BrowserRouter>
)
