import Mongoose from "../../db.js";

const productSchema = new Mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        summary: String,
        stock: Number,
        fileName: String,
    },
    {
        colletion: "products",
        timestamps: true, //timestamp é tipo um log
    },
);

export default Mongoose.model("products", productSchema, "products");
