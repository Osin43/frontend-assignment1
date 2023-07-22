import React, { useState } from "react";
const Navbar = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="bg-white dark:bg-white-400 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-black">
          Online store
        </span>
        <div className="relative">
          <button
            onClick={handleCartIconClick}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 6V4a3 3 0 013-3h0a3 3 0 013 3v2m4 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V8m4 2h6m-6 5a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            {/* Cart ({cartItems.length}) */}
          </button>
          {isCartOpen && (
            <div className="absolute top-12 right-0 bg-white border border-gray-200 p-4 rounded-lg shadow-lg">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <p>{item.title}</p>
                      <p>${item.price}</p>
                      <hr />
                    </div>
                  ))}
                  <p className="text-right font-semibold mt-2">
                    Total: $
                    {cartItems.reduce((acc, item) => acc + item.price, 0)}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
