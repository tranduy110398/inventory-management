import { Router } from "express";
import { getProducts, createProduct } from "../controller/productController";

const router = Router();
router.get("/", getProducts);
router.post("/", createProduct);


export default router;