import React, { useState } from "react";
import HeroSectionProduct from "../HeroSectionProduct";
import Footer from "../Footer";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const productData = [
    { id: 1, name: "Category 1", products: ["Product 1A", "Product 1B", "Product 1C"] },
    { id: 2, name: "Category 2", products: ["Product 2A", "Product 2B", "Product 2C"] },
    { id: 3, name: "Category 3", products: ["Product 3A", "Product 3B", "Product 3C"] },
    { id: 4, name: "Category 4", products: ["Product 4A", "Product 4B", "Product 4C"] },
  ];

  return (
    <div>
      <HeroSectionProduct />

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
        {productData.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300 py-2">
            {/* Dropdown Header */}
            <div
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <span
                className={`text-lg transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>
            {/* Dropdown Content */}
            {activeIndex === index && (
              <div className="mt-2 pl-4 text-gray-700">
                {item.products.map((product, i) => (
                  <p key={i} className="py-1">
                    {product}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
