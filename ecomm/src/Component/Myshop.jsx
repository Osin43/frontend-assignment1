import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-white dark:bg-white-400 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-black">
//           Online store
//         </span>
//       </div>
//     </nav>
//   );
// };

const My = () => {
  const [products, setProducts] = useState([]); // Using the useState hook to manage the 'products' state
  const [selectedProduct, setSelectedProduct] = useState(null); // Using the useState hook to manage the 'selectedProduct' state
  const [searchQuery, setSearchQuery] = useState(""); // Using the useState hook to manage the 'searchQuery' state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart.`);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="my-20">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search by title"
              className="p-2 border border-gray-300 rounded mr-2 text-black"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded shadow cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                {/* <Link to={`/product/${product.id}`}> */}{" "}
                {/* Use Link to navigate */}
                <img
                  src={product.image}
                  alt={product.title}
                  onClick={() => handleProductClick(product)}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-black">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-blue-600 font-semibold">${product.price}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
                {/* </Link>{" "} */}
              </div>
            ))}
          </div>

          {selectedProduct && <Products product={selectedProduct} />}
        </div>
      </div>
    </div>
  );
};

export default My;
