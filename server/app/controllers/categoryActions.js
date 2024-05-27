const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];

  const cat = (req, res) => {

    
    
    if (req.params.id != null) {
      const filterCat = categories.filter((categorie) =>
        categorie.id===parseInt(req.params.id,10)
      );
  
      res.json(filterCat);
    } else {
      res.json(categories);
    }
  };

  


  module.exports = {cat};