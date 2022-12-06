import express from "express";
import purchaseModel from "../models/purchase.model.js";
import albumModel from "../models/album.model.js";

const purchaseRoute = express.Router();

// ITERAÇÃO 3.1 ROTA POST

purchaseRoute.post("/create-purchase/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const newPurchase = await purchaseModel.create({
      ...req.body,
      album: albumId,
    });
    console.log(newPurchase);

    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);

    return res.status(400).json(error.errors);
  }
});

// ITERAÇÃO 3.2 GET PURCHASES BY ID

purchaseRoute.get("/:purshaseId", async (req, res) => {
  try {
    const { purshaseId } = req.params;
    console.log(purshaseId);

    const onePurshase = await purchaseModel
      .findById(purshaseId)
      .populate("album");

    return res.status(200).json(onePurshase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

export default purchaseRoute;
