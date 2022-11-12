const router = require('express').Router();
// import all API routes from /api/index.js
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");


router.use("/users", userRoutes);
router.use("/thoughts", userThoughts);

// status error
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
  });
  
  module.exports = router;