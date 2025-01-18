import express from "express";
import { ProductController } from "../controller/controller.js";
export let route = express.Router();

route.get("/", ProductController.getAll);
route.get("/:id", ProductController.getById);
route.post("/", ProductController.post);
route.delete("/:id", ProductController.delete);
route.put("/:id", ProductController.edit);
