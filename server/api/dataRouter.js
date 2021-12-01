import express from "express";
const router = express.Router();
import expressasynchandler from "express-async-handler";
import Data from "../model/dataModel.js"; 

router.post(
  "/datacreate",
  expressasynchandler(async (req, res) => {
    const { top, left, width, height, background, borderRadius } = req.body;
    try {
      const data = new Data({
        top,
        left,
        width,
        height,
        background,
        borderRadius,
      });
      const created = await data.save();
      res.status(201).send({ message: "new data was created", data: created });
    } catch (error) {
      console.log(error.message ? error.message : error);
    }
  })
);

router.get(
  "/getdata",
  expressasynchandler(async (req, res) => {
    try {
      const data = await Data.find({});
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message ? error.message : error);
    }
  })
);

router.post(
  "/removedata/:id",
  expressasynchandler(async (req, res) => {
    try {
      const data = await Data.findByIdAndDelete(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message ? error.message : error);
    }
  })
);

router.post(
  "/updatedata/:id",
  expressasynchandler(async (req, res) => {
    try {
      const data = await Data.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message ? error.message : error);
    }
  })
);
router.post(
  "/updatebackground/:id",
  expressasynchandler(async (req, res) => {
    try {
      const data = await Data.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message ? error.message : error);
    }
  })
);

export default router;
