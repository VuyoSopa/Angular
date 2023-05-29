const express = require("express");
require('dotenv').config()
const cors = require("cors");
const app = express();
const initRoutes = require("./routes/hero.routes")
const PORT = process.env.PORT;

const DB = require("./config/db.config")
const db = require('./models')

// var corsOptions ={
//   origin: "http:localhost:8081"
// };

app.use(cors());

app.use(express.json());



app.use(express.urlencoded({ extended: true, limit: '50mb'}))

db.mongoose.connect(DB.db_url,{ //ALLOWS TO CONNECT TO THE DATABASE OF MONGO
    // userNewUrlParser: true,
    // useUnifiedTopology: true
})
  .then(console.log("Connected successfully"))
  .catch(err =>{console.log("Error message : " + err)})

  initRoutes(app)

  app.listen(PORT, () => { //HERE WHERE YOU WRITE 2 FUNCTIONS (PORT, AND THE CALLBACK FUNCTION)(PORT IS A VARIABLE)
    console.log(`Server is running @ port ${PORT}.`) //THIS PART IS WHERE YOU WRITE WHAT YOU WANT IN THE RESULTS
  });