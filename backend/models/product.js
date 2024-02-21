import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
  
    name: String,
    desc: String,
    price: Number,
    image: String,
    category: String,
    amount: Number,
  },
  {
    timestamps: true
  },
  {
    collection: 'producttables',
  }
);

const productModel = mongoose.model('producttables', productSchema);
export default productModel;
