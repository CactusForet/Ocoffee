import { dataMapper } from "../dataMappers/dataMapper.js"

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
  const coffeeId = req.params.id; // Récupérer l'ID depuis l'URL
  const coffee = await dataMapper.getCoffeeById(coffeeId);

  if (!coffee) {
    return res.status(404).render('404');
  }

  // Passe l'ID du café à availability()
  const availability = await dataMapper.availability(coffeeId);
  console.log("Dans le controller, availability:", availability);
  res.render("details", { coffee, availability }); // Passe coffee et availability dans un objet au template
}; 

//création méthode boutique
export const shop = async (req, res) => {

  res.render("shop");
}



