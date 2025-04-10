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
