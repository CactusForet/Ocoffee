// app/config/pgPool.js
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // charge le .env

const { Pool } = pg;

// utilise les variables PGUSER, etc. depuis le .env

const pgPool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE,
    port: process.env.PGPORT || 5432,
  });
  
export default pgPool;

pgPool.connect()
  .then(() => console.log("✅ Connexion à PostgreSQL réussie !"))
  .catch((err) => console.error("❌ Erreur de connexion PostgreSQL :", err));


/*
// Import du module
import pg from "pg";

// récupération de Pool à l'intérieur de pg
// je crée un objet pool
const { Pool } = pg;

// ici je vais chercher dans mon .env les variables d'environnement et je me connecte
export const pgPool = new Pool();
*/