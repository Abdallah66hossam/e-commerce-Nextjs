/* eslint-disable react/jsx-key */
import { addToCart } from "../redux/cartSlice";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  const dispatch = useDispatch();
  const { img, title, description, rating, price, category } = product;
  const stars = [
    <AiFillStar size={22} color="gold" key={1} />,
    <AiFillStar size={22} color="gold" key={2} />,
    <AiFillStar size={22} color="gold" key={3} />,
    <AiFillStar size={22} color="gold" key={4} />,
    <AiFillStar size={22} color="gold" key={5} />,
  ];
  switch (Math.round(rating)) {
    case 1:
      stars.length = 1;
      break;
    case 2:
      stars.length = 2;
      break;
    case 3:
      stars.length = 3;
      break;
    case 4:
      stars.length = 4;
      break;
    case 5:
      stars.length = 5;
      break;

    default:
      stars.length = 0;
      break;
  }
  return (
    <section className="text-gray-700 body-font overflow-hidden my-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex sm:flex-col" data-aos="fade-zoom-left">
          <Image
            alt="product img"
            className="h-[450px] object-cover object-center sm:w-full rounded border border-gray-200"
            src={img}
            width={500}
            height={400}
            data-aos="fade-zoom-left"
          />
          <div
            className="w-1/2  pl-10 py-6 mt-0 sm:w-full"
            data-aos="fade-zoom-right"
          >
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">{stars}</span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500 cursor-pointer">
                  <BsFacebook />
                </a>
                <a className="ml-2 text-gray-500 cursor-pointer">
                  <BsInstagram />
                </a>
                <a className="ml-2 text-gray-500 cursor-pointer">
                  <BsTwitter />
                </a>
              </span>
            </div>
            <span className="title-font font-medium text-2xl text-gray-900">
              ${price}
            </span>
            <p className="my-5">{description}</p>

            <div className="flex">
              <button
                className="flex text-white bg-black py-2 px-5 hover:bg-transparent hover:text-black duration-150 border-2 border-black rounded"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-400 duration-100">
                <AiFillHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
