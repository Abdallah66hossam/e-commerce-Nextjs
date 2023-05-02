import Banner from "../../components/Banner";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import Testmonials from "../../components/Testmonials";
import { getProducts } from "../../redux/productSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home({ products }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(products));
  }, [dispatch, products]);
  return (
    <div>
      <Banner />
      <Products />
      <Newsletter />
      <Testmonials />
    </div>
  );
}

export async function getStaticProps() {
  const products = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      products: products.data,
    },
  };
}
