import pgPool  from "../config/pgPool.js";

// Création de l'objet dataMapper qui va contenir l'intégralité des fonctions d'accès aux données
export const dataMapper = {

    async getLimitedCoffees() {
        try {
          const { rows } = await pgPool.query("SELECT * FROM coffee LIMIT 3");
          return rows;
        } catch (error) {
          throw new Error('Erreur BDD getLimitedCoffees');
        }
      },

    async getAllCoffees(){
        try {
           const { rows } = await pgPool.query("SELECT * FROM coffee");
           return rows;
        } catch (error) {
            throw new Error('erreur bdd getAllCoffee');
        }
    },

    async getCoffeeById(id){
        try {
            const { rows } = await pgPool.query("SELECT * FROM coffee WHERE id = $1", [id]);
            return rows[0];
        } catch (error) {
            throw new Error('erreur bdd getCoffeeById');
        }
    },

    async availability(coffeeId){
        try {
            const { rows } = await pgPool.query("SELECT available FROM coffee WHERE id = $1", [coffeeId]);
            // console.log("Résultat de availability:", rows[0]); // Pour déboguer
            return rows[0];
        } catch (error) {
            throw new Error('erreur bdd availability'); 
        }
    }
};