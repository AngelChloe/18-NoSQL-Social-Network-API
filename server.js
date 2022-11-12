const express = require('express');
const mongoose = require("mongoose");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// if MONGODB_URI exists, connect to that DB
// otherwise short-circuit to local MongoDB server's DB
// MongoDB finds and connects to DB if exists or creates if it doesn't
// mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-api", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// log mongo queries being executed
// mongoose.set("debug", true);

// app.use(require('./routes'));
// mongoose.connection.once("open",()=>{
// app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
