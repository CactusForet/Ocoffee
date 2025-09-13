import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // charge le .env local si présent

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL; // Neon sur Render

const pgPool = connectionString
  ? new Pool({ connectionString })   // si DATABASE_URL existe (Render)
  : new Pool({                       // sinon utilise ton .env local
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST || "localhost",
      database: process.env.PGDATABASE,
      port: process.env.PGPORT || 5432,
    });

export default pgPool;

pgPool.connect()
  .then(() => console.log("✅ Connexion à PostgreSQL réussie !"))
  .catch((err) => console.error("❌ Erreur de connexion PostgreSQL :", err));
