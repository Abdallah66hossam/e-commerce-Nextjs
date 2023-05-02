import connectDB from "../../../../lib/dbConnect";
import Products from "../../../../models/Products";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  connectDB();

  if (method === "GET") {
    try {
      const product = await Products.findById(id);
      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
