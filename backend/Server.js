// import express and cors 
const express = require("express");
const cors = require("cors");


//import MongoDB 
const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");     //MongoDB URL to reach the database 
const database = client.db("super-saver-db");                    // Database name in MongoDB
const categoriesCollection = database.collection("categories");  // Collections name in database


// initialize the express app by invoking express function
const app = express();
app.use(cors());



const port = process.env.PORT || 5000;


//listen for the request 
app.listen(port, () => {
    console.log(`Server started. Listening on port ${port}.`);
});

app.get ("/categories" , async (req, res)=>{
    let result = await categoriesCollection.find({}).toArray();
    res.status(200).json(result);
});