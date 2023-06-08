import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Category from "./Category";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const products = useSelector((state) => state.category.products);
  const [loadMore, setLoadMore] = useState(false);
  const [btndisplay, setBtnDisplay] = useState(true);
  const [spinner, setSpinner] = useState(true);

  const handelLoading = () => {
    setBtnDisplay(false);
    setTimeout(() => {
      setSpinner(true);
      setLoadMore(true);
    }, 1000);
    setSpinner(false);
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
    Aos.refresh();
  }, []);
  return (
    <>
      <section className="mb-10 mt-20 mx-[6%]">
        <h1 className="uppercase text-black font-semibold text-2xl pb-6">
          products
        </h1>
        <section className="flex flex-wrap gap-3">
          <Category staticProducts={products} />
          <main className="flex flex-wrap gap-y-7 md:gap-2 justify-around w-[68%] md:w-full">
            {!loadMore
              ? products
                  .map((product) => (
                    <ProductItem {...product} key={product.id} />
                  ))
                  .slice(0, 8)
              : products.map((product) => (
                  <ProductItem {...product} key={product.id} />
                ))}
          </main>
        </section>
        <div className="flex justify-center">
          {btndisplay && ( // loading more button
            <button
              onClick={handelLoading}
              className="bg-black text-white px-4 py-1 md:py-2 md:px-2 text-sm md:text-[12px] rounded-xl hover:bg-transparent hover:text-black duration-150 border-2 border-transparent hover:border-black mt-6"
              data-aos="fade-up"
            >
              Browse more!
            </button>
          )}
          {!spinner && (
            <div
              class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mt-5"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
