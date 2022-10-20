// import express and cors 
const express = require("express");
const cors = require("cors");



//import MongoDB 
const {MongoClient} = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");     //MongoDB URL to reach the database 
const database = client.db("super-saver-db");                    // Database name in MongoDB
const categoriesCollection = database.collection("categories");  // CategoriesnCollection  in database
const productsCollection = database.collection("products");      // Products Collection in Database

const {ObjectId} = require('mongodb');

// initialize the express app by invoking express function
const app = express();
app.use(cors());



const port = process.env.PORT || 5000;


//listen for the request 
app.listen(port, () => {
    console.log(`Server started. Listening on port ${port}.`);
});

// Get the array from Categories
app.get ("/categories" , async (req, res)=>{

    let categories = await categoriesCollection.find({}).toArray();
    res.status(200).json(categories);

});

// Get the array from Products
app.get ("/products/:category" , async (req, res)=>{

console.log(req.params.category);

    let products = await productsCollection.find({"category":ObjectId(req.params.category)}).toArray();

    res.status(200).json(products);

});