const router = require('express').Router();
// const index = require("./index")
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");


router.use("/users", userRoutes);
router.use("/thoughts", userThoughts);

// status error
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
  });
  
  module.exports = router;