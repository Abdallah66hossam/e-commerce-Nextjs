import Link from "next/link";
import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/cartSlice";
import Aos from "aos";
import "aos/dist/aos.css";

const ShoppingCart = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);
  return (
    <div className="my-20 mx-[6%]">
      <div
        className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
        data-aos="fade-zoom-left"
      >
        <IoIosArrowBack />
        <Link href={".."} className="text-sm pl-2 leading-none">
          Back
        </Link>
      </div>
      <h1 className="text-2xl text-black font-black leading-10 pt-3">
        Shopping Cart:
      </h1>
      <main
        className="flex flex-wrap justify-between items-start
      "
      >
        <section className="md:mb-8" data-aos="fade-zoom-right">
          {products.length > 0 ? (
            products?.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex items-center sm:flex-col sm:justify-center mt-14 border-t border-gray-200 w-full"
                >
                  <div className="w-1/4 sm:w-full mt-7">
                    <img
                      src={product.image}
                      alt="product item"
                      className="object-cover  lg:w-screen md:h-[400px] md:mb-4"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="pl-3 w-3/4">
                    <p className="text-xs leading-3 text-gray-800 pt-0 md:pt-4">
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between w-full pt-1">
                      <p className="text-base font-black leading-none text-black">
                        {product.title}
                      </p>
                    </div>
                    <p className="leading-3  text-black font-bold text-base py-5">
                      <span className="underline pr-2">Price:</span> $
                      {product.price}
                    </p>
                    <button
                      className="leading-3 underline text-red-700 cursor-pointer text-base"
                      onClick={() => dispatch(removeCart(product))}
                    >
                      remove
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="mt-4">
              <p className="text-red-900">The cart is empty!</p>
              <Link
                href={"/"}
                className="py-3 px-5 rounded text-white bg-black font-bold text-base mt-5 block"
              >
                Go to shopping
              </Link>
            </div>
          )}
        </section>
        <section
          className="rounded bg-gray-100 lg:w-full lg:mt-10 w-[30%] h-60 flex flex-col justify-center items-center"
          data-aos="fade-zoom-right"
        >
          <div className="px-14 py-16 justify-between w-full">
            <p className="text-xl font-black text-black pb-6">Summary</p>
            <div>
              <div className="flex items-center pb-6 justify-between w-full">
                <p className="text-md leading-normal text-black font-semibold">
                  Total
                </p>
                <p className="text-md font-bold leading-normal text-right text-gray-800">
                  ${total}
                </p>
              </div>
              <button className="text-base leading-none w-full py-3 bg-black rounded-md border-black border-2 hover:bg-transparent hover:text-black duration-300 text-white">
                Checkout
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShoppingCart;
