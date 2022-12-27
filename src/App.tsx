import React from "react";
import { Routes, Route } from "react-router-dom";
import { Blog } from "./components/blog/blog.component";
import { Contact } from "./components/contact/contact.component";
import { Header } from "./components/header/header.component";
import { Home } from "./components/home/home.component";
import { Products } from "./components/products/products.component";
import { Shop } from "./components/shop/shop.component";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
