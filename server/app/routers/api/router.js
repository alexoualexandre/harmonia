

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const express = require("express");

const router = express.Router();

 const { sayWelcome } = require("../../controllers/sayAction");
 const {browse,read} = require("../../controllers/programActions");

const {cat} = require("./categories/router");



 router.get("/", sayWelcome);
 router.get("/programs", browse);
 router.get("/programs/:id", read);
 router.get("/categories", cat); 
 router.get("/categories/:id", cat); 
 
 
 

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);
router.use("/programs", browse);



/* ************************************************************************* */

module.exports = router;
