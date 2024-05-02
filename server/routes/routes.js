import express from "express";
import {
  addContent,
  getContent,
  updateContent,
} from "../controllers/controllers.js";

const router = express.Router();

//Content all Api Routes
router.route("/get").get(getContent);
router.route("/add").post(addContent);
router.route("/update/:id").put(updateContent);

export default router;
