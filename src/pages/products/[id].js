import ProductDetails from "../../../components/ProductDetails";
import axios from "axios";

const ProductPage = ({ product }) => {
  return <ProductDetails product={product} />;
};

export async function getServerSideProps(context) {
  const product = await axios
    .get(`https://fakestoreapi.com/products/${context.params.id}`)
    .then((res) => {
      return res.data;
    });
  return {
    props: { product },
  };
}

export default ProductPage;
