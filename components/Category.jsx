import { filterProducts } from "../redux/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

const Category = ({ products }) => {
  const [category, setCategory] = useState();
  const dispatch = useDispatch();
  const handelFilter = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    dispatch(filterProducts(category));
  }, [category, dispatch, products]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
    <div
      className="h-fit bg-gray-300 w-[30%] md:w-full p-5 rounded"
      data-aos="fade-zoom-in"
    >
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="men's clothing"
          name="category"
          value="men's clothing"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label
          htmlFor="men's clothing"
          className="cursor-pointer text-blue-gray-800 text-sm"
        >
          MEN{`'`}S CLOTHING
        </label>
      </div>
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="jewelery"
          name="category"
          value="jewelery"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label
          htmlFor="jewelery"
          className="cursor-pointer text-blue-gray-800  text-sm"
        >
          JEWELERY
        </label>
      </div>
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="electronics"
          name="category"
          value="electronics"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label
          htmlFor="electronics"
          className="cursor-pointer text-blue-gray-800  text-sm"
        >
          ELECTRONICS
        </label>
      </div>
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="women's clothing"
          name="category"
          value="women's clothing"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label
          htmlFor="women's clothing"
          className="cursor-pointer text-blue-gray-800 text-sm"
        >
          WOMEN {`'`}S CLOTHING
        </label>
      </div>
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="All"
          name="category"
          value="All"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label htmlFor="All" className="cursor-pointer text-blue-gray-800">
          All
        </label>
      </div>
    </div>
  );
};

export default Category;
