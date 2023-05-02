import { models, model, Schema } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  img: String,
  rating: Number,
});

const Products = models.products || model("products", ProductSchema);
export default Products
