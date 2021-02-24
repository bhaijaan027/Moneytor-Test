import mongoose from "mongoose";

const serverSchema = mongoose.Schema(
  {
    ram: {
      type: String,
      required: true,
    },
    cpu: {
      type: String,
      required: true,
    },
    operatingSystem: {
      type: String,
      required: true,
    },
    graphics: {
      type: String,
      required: true,
    },
    storage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//here i used timestamps for auto filled atributes ie. created_at ,updated_at

export const serverModel = mongoose.model("server", serverSchema);
