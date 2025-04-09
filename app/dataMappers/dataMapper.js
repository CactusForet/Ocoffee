import pgPool  from "../config/pgPool.js";

// Création de l'objet dataMapper qui va contenir l'intégralité des fonctions d'accès aux données
export const dataMapper = {

    async getAllCoffees(){
        try {
           const { rows } = await pgPool.query("SELECT * FROM coffee");
           return rows;
        } catch (error) {
            throw error('erreur bdd getAllCoffee');
        }
    }
};