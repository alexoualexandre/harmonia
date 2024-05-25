

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const express = require("express");

const router = express.Router();

 const { sayWelcome } = require("../../controllers/sayAction");
 const {browse} = require("../../controllers/programActions");

 router.get("/", sayWelcome);
 router.get("/browse", browse);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);
router.use("/browse", browse);

/* ************************************************************************* */

module.exports = router;
