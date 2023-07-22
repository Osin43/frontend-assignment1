import React, { useState, useEffect, useRef } from "react";

const Products = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const detailsRef = useRef(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const timeout = setTimeout(() => {
      setSelectedProduct(null);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [product, setSelectedProduct]);

  return (
    <div
      ref={detailsRef}
      className={`mt-4 p-4 bg-white rounded shadow ${
        product === selectedProduct ? "border-2 border-blue-500" : ""
      }`}
    >
      <div className="flex flex-col items-center w-full mt-12">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-80 object-cover mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-xl font-semibold pt-2 text-[#8A8888]">
          {product.title}
        </p>
        <p className="text-2xl font-semibold pt-2 text-[#8A8888]">
          $ {product.price}
        </p>
        <p
          className="flex flex-col items-start justify-start w-full pl-4 pb-4 pr-4 text-sm flex items-center justify-center text-justify font-semibold pt-3 text-[#8A8000]"
          style={{ letterSpacing: "0.1em", lineHeight: "2" }}
        >
          {product.description}
        </p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
