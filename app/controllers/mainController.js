import { dataMapper } from "../dataMappers/dataMapper.js"

//création méthode home
export const home = async (req, res) => {
  const showThreeCoffees = await dataMapper.getLimitedCoffees();

  res.render("homePage", { showThreeCoffees } );
};

// création méthode catalog
export const catalog = async (req, res) => {
  try {
    // Vérifier si on demande tous les cafés ou juste les 3 premiers
    const showAll = req.query.showAll === 'true';
    
    // Récupérer les cafés selon le paramètre
    const coffees = showAll 
      ? await dataMapper.getAllCoffees()
      : await dataMapper.getLimitedCoffees();
    
    // Passer les cafés et l'état d'affichage à la vue
    res.render("catalog", { 
      coffees, 
      showAll 
    });
  } catch (error) {
    console.error('Erreur catalog:', error);
    res.status(500).render('error');
  }
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



