DROP TABLE IF EXISTS "coffee";

CREATE TABLE IF NOT EXISTS "coffee" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT,
    "description" TEXT,
    "origin" TEXT,
    "reference" INT,
    "price_per_kilo" REAL NOT NULL,
    "distinctive_feature" TEXT,
    "available" BOOLEAN
); 

INSERT INTO "coffee" ("id", "name", "description", "origin", "reference", "price_per_kilo", "distinctive_feature", "available") VALUES
(1, 'Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', 'Italie', 100955890, 20.99, 'Corsé', true),
(2, 'Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', 'Colombie', 100955894, 18.75, 'Acide', true),
(3, 'Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', 'Éthiopie', 105589090, 22.50, 'Fruité', true),
(4, 'Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', 'Brésil', 134009550, 17.80, 'Doux', true),
(5, 'Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', 'Guatemala', 256505890, 21.25, 'Corsé', true),
(6, 'Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', 'Kenya', 295432730, 23.70, 'Acide', true),
(7, 'Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', 'Indonésie', 302932754, 19.95, 'Corsé', true),
(8, 'Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', 'Costa Rica', 327302954, 24.50, 'Acide', true),
(9, 'Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', 'Vietnam', 549549090, 16.75, 'Épicé', true),
(10, 'Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', 'Tanzanie', 582954954, 26.80, 'Fruité', true),
(11, 'Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', 'Jamaïque', 589100954, 39.25, 'Doux', true),
(12, 'Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', 'Rwanda', 650753915, 21.90, 'Fruité', true),
(13, 'Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', 'Panama', 795501340, 42.00, 'Fruité', true),
(14, 'Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', 'Pérou', 954589100, 19.40, 'Chocolaté', false),
(15, 'Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', 'Hawaï', 958090105, 55.75, 'Doux', false),
(16, 'Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', 'Nicaragua', 691550753, 28.60, 'Fruité', false);
