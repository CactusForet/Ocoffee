import pgPool  from "../config/pgPool.js";
import * as dataMapper from "../dataMappers/dataMapper.js"

//création méthode home
export const home = async (req, res) => {

  res.render("homePage");
};

// création méthode catalog
export const catalog = async (req, res) => {
  const allCoffees = await dataMapper.getAllCoffees();

  res.render("catalog", { allCoffees });
};

// création méthode detail
export const details = async (req, res) => {

  res.render("details");
}; 

//création méthode boutique
export const shop = async (req, res) => {

  res.render("shop");
}



/* export const homePage = async (req, res) => {
    const result = await pgPool.query("SELECT * FROM promos");
    const promos = result.rows;
    console.log(promos);
    
    res.render("home/home");
} */

//ou

/* import dataMapper from '../dataMappers/dataMapper.js';

const mainController = {

  // méthode pour la page d'accueil
  async homePage(request, response) {
    try {
      const figurines = await dataMapper.getAllFigurines();
      // Remplacer le response.sendFile par le rendu d'un fichier EJS
      response.render("accueil", { figurines });
    } catch (error) {
      response.status(500).send("Une erreur est survenue lors de la récupération des figurines");
    }
  },

  // méthode pour la page article
  async articlePage(request, response) {
    const id = Number(request.params.id);
    if(!id){
      response.status(400).send("Fournissez un id");
    }
    try {
      const figurine = await dataMapper.getFigurineById(id);
      console.log(figurine);
      if(!figurine){
        response.status(404).send("Figurine inexistante");
      }
      const reviews = await dataMapper.getReviewsByFigurine(id);
      response.render("article", { figurine, reviews });
      
    } catch (error) { 
      console.log(error);
      response.status(500).send("Erreur lors de la recuperation en bdd");
    }
  },
 */
