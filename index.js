// TODO import des variables d'environnement 

import dotenv from "dotenv";
dotenv.config();

import path from 'node:path';
import express from 'express';
//import session from 'express-session';

// TODO import du router

import { router } from './app/router/router.js';

const app = express();

// Paramétrages
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "app", "views"));
app.use(express.static(path.join(import.meta.dirname, "public")));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})
