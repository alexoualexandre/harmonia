const sayWelcome = (req, res) => {
    
    console.info(req.query.name);
    res.send("Welcome to Wild Series !");

  };

  module.exports = { sayWelcome };