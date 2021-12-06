import mongoose from "mongoose";

const Data = new mongoose.Schema(
  {
    top: { type: String, default: "0px" },
    left: { type: String, default: "0px" },
    width: { type: String, default: "0px" },
    height: { type: String, default: "0px" },
    background: { type: String, default: "#000" },
    borderRadius: { type: String, default: "0px" },
    parentId: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Data", Data);
