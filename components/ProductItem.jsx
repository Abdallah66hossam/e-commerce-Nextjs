import { addToCart } from "../redux/cartSlice";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const ProductItems = ({ id, title, price, category, image }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <div
      className="h-fit w-48 md:w-44 bg-white shadow rounded-lg group overflow-hidden sm:w-[80%]"
      data-aos="zoom-in"
    >
      <Link href={`/products/${id}`}>
        <img
          src={image}
          className="object-cover h-[200px] w-full rounded-t-lg group-hover:scale-110 duration-700"
          alt="product image"
          width={150}
          height={250}
        />
      </Link>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-400 font-light text-xs text-center uppercase">
          {category}
        </p>
        <h1 className="text-gray-800 text-center mt-1 font-semibold uppercase text-sm">
          {title.slice(0, 8)}
        </h1>
        <p className="text-center text-gray-800 mt-1">${price}</p>
        <button
          className="bg-black text-white px-4 py-1 md:py-2 md:px-2 text-sm md:text-[12px] rounded-3xl hover:bg-transparent hover:text-black duration-150 border-2 border-transparent hover:border-black mt-3 flex items-center"
          onClick={() => {
            dispatch(addToCart({ id, title, price, category, image }));
          }}
        >
          Add to cart
          <TiShoppingCart className="pl-1" size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
