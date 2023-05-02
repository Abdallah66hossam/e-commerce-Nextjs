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
          id="smartphones"
          name="category"
          value="smartphones"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label
          htmlFor="smartphones"
          className="cursor-pointer text-blue-gray-800"
        >
          smartphones
        </label>
      </div>
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="watches"
          name="category"
          value="watches"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label htmlFor="watches" className="cursor-pointer text-blue-gray-800">
          watches
        </label>
      </div>
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="cameras"
          name="category"
          value="cameras"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label htmlFor="cameras" className="cursor-pointer text-blue-gray-800">
          cameras
        </label>
      </div>
      <div className="flex items-center pb-1">
        <input
          type="radio"
          id="airpods"
          name="category"
          value="airpods"
          className="relative top-[2px] mr-1 cursor-pointer"
          onClick={handelFilter}
        />
        <label htmlFor="airpods" className="cursor-pointer text-blue-gray-800">
          airpods
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
