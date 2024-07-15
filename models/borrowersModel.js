import mongoose from "mongoose";

const customersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    borrowedItems: [
      {
        name: {
          type: String,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
      },
    ],
    isActive: {
      type: Boolean,
      required: true,
      default:true,
    },
  },
  {
    timestamps: true,
  }
);

const Customers = mongoose.model("borrowers", customersSchema);

export default Customers;


