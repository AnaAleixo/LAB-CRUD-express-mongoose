import express from "express";
import albumModel from "../models/album.model.js";

const albumRoute = express.Router();

// ITERAÇÃO 2.1 ROTA POST

albumRoute.post("/create", async (req, res) => {
  try {
    const createNewAlbum = await albumModel.create(req.body);
    console.log(req.body);

    return res.status(201).json(createNewAlbum);
  } catch (error) {
    console.log(error);

    return res.status(400).json(error.errors);
  }
});

// ITERAÇÃO 2.2 ROTA GET ALL

albumRoute.get("/allAlbuns", async (req, res) => {
  try {
    const albuns = await albumModel.find({});

    return res.status(200).json(albuns);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

// ITERAÇÃO 2.3 ROTA GET BY ID


albumRoute.get("/:albumId", async (req, res) => {
    try {

        const { albumId } = req.params;
        console.log(albumId)

      const oneAlbum = await albumModel.findById(albumId)
  
      return res.status(200).json(oneAlbum);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error.errors);
    }
  });


  // ITERAÇÃO 2.4 ROTA PUT

  albumRoute.put("/:albumId", async (req, res) => {
    try {
      const { albumId } = req.params;
      console.log(albumId);
  
      const updatedAlbum = await albumModel.findOneAndUpdate(
        { _id: albumId },
        { ...req.body },
        { new: true, runValidators: true }
      );
  
      return res.status(200).json(updatedAlbum);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error.errors);
    }
  });

    // ITERAÇÃO 2.5 ROTA DELETE


    albumRoute.delete("/delete/:albumId", async (req, res) => {
        try {
          const { albumId } = req.params;
      
          const deletedAlbum = await albumModel.findByIdAndDelete(albumId);
      
          return res.status(200).json(deletedAlbum)
        } catch (error) {
          console.log(error);
          return res.status(400).json(error.errors);
        }
      });
  

export default albumRoute;