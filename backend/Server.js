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


// Get the array of data from Categories collection
app.get ("/categories" , async (req, res)=>{

    let categories = await categoriesCollection.find({}).toArray();
    res.status(200).json(categories);

});

// Get the array of data from Products collection with (Category's Id) which is name (category) In MongoDB
app.get ("/products/:category" , async (req, res)=>{

console.log(req.params.category);

    let products = await productsCollection.find({"category":ObjectId(req.params.category)}).toArray();

    res.status(200).json(products);

});


////////////////////////////
app.get ("/products" , async (req, res)=>{

    console.log(req.params.category);
    
        let products = await productsCollection.find().toArray();
    
        res.status(200).json(products);
    
    });


//Passing the value from search input with path to get the result of (name, shop_name, city) from productsCollection 
app.get ("/SearchResult/:value", async (req, res)=>{
       
        let value = req.params.value;
       
        value = value.replace(value[0], value[0].toUpperCase());
        shopNameValue = value.replace(value,value.toUpperCase());

        console.log(value);
      
        // let products = await productsCollection.find({ "name": value}).toArray();   //let products = await productsCollection.find({name:  new RegExp(value,'i')}).toArray();

        let products = await productsCollection.find({$or: [
            
            {"name": {$in: [ new RegExp(value,'i')] }},
            {"city": {$in: [value] }},
            {"shop_name": {$in: [shopNameValue] }}            

         ]} ).toArray();

        console.log(products);
        
        res.status(200).json(products);
        
        });    




       app.get ("/WrongInput/:value", async (req, res)=>{

    
        

            res.status(200).json('there is no product');
        
        });  



     