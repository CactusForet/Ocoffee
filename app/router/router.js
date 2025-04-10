import express from "express";
import * as mainController from "../controllers/mainController.js";

export const router = express.Router();

// accueil
router.get("/", mainController.home);

// catalogue
router.get("/catalog", mainController.catalog);

//détails
router.get("/catalog/detail/:id", mainController.details);

//boutique
router.get("/boutique", mainController.shop);