import connectDB from "../../../../lib/dbConnect";
import Products from "../../../../models/Products";

export default async function handler(req, res) {
  console.log("connecting to api");
  connectDB();
  console.log("connected");
  switch (req.method) {
    case "GET":
      try {
        const products = await Products.find({});
        if (!products)
          return res.status(404).json({ error: "products is not found" });
        res.status(200).json(products);
      } catch (err) {
        return res.status(404).json({ error: "Error while fetching data" });
      }
    // case "POST":
    //   try {
    //     const productData = req.body;
    //     if (!productData)
    //       return res.status(404).json({ error: "data not found" });
    //     Products.create(productData);
    //     return;
    //   } catch (err) {
    //     return res.status(404).json({ error: "Error while posting the data" });
    //   }
  }
}
