import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const products = useSelector((state) => state?.counter?.cartList ?? []);
  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-white">
          Shopping Cart
        </h2>

        {products.length ? (
          <>
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
              >
                <div className="col-span-12 lg:col-span-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-12 lg:col-span-10 w-full lg:pl-3">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                      {product.name}
                    </h5>
                    <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                          cx="17"
                          cy="17"
                          r="17"
                        />
                        <path
                          className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                          d="M14.167 13.6V12.592a1.26 1.26 0 0 1 1.26-1.26h3.148a1.26 1.26 0 0 1 1.26 1.26V13.6m0 0H12.467v5.288a3 3 0 0 0 .553 1.724c.553.553 1.443.553 3.224.553h1.511c1.78 0 2.67 0 3.224-.553a3 3 0 0 0 .553-1.724V13.6Z"
                          stroke="#EF4444"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button className="group rounded-full border border-gray-200 p-2.5 bg-white hover:bg-gray-50">
                        <svg
                          className="stroke-gray-900"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 9.5H13.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        value={product.quantity}
                        readOnly
                        className="border border-gray-200 rounded-full w-10 aspect-square text-center bg-gray-100 text-sm font-semibold text-gray-900"
                      />
                      <button className="group rounded-full border border-gray-200 p-2.5 bg-white hover:bg-gray-50">
                        <svg
                          className="stroke-gray-900"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.75 9.5H14.25M9 14.75V4.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                      ${(product.price * product.quantity).toFixed(2)}
                    </h6>
                  </div>
                </div>
              </div>
            ))}

            {/* Subtotal & Checkout - Rendered Once */}
            <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
              <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 max-md:text-center max-md:mb-4">
                Subtotal
              </h5>
              <div className="flex items-center justify-between gap-5">
                <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs transition hover:bg-indigo-100">
                  Promo Code?
                </button>
                <h6 className="font-manrope font-bold text-3xl leading-10 text-indigo-600">
                  ${subtotal.toFixed(2)}
                </h6>
              </div>
            </div>

            <div className="max-lg:max-w-lg max-lg:mx-auto">
              <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
                Shipping, taxes, and discounts calculated at checkout
              </p>
              <button className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center hover:bg-indigo-700 transition">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <h1 className="font-manrope font-bold text-2xl leading-9 text-blue-500 text-center">
            Your cart is empty
          </h1>
        )}
      </div>
    </section>
  );
};

export default Cart;
