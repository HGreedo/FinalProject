const { MongoClient } = require("mongodb");
const express = require("express");
//const bodyParser = require("body-parser");
//const cors = require("cors");

//const app = express();

//const mongoose = require("mongoose");

//const db = require("./config/db.config");

const dotenv = require("dotenv");
dotenv.config();

async function main(){
    const url = "mongodb+srv://root:root@cluster0.3qmjf.mongodb.net/sample_mflix"

    const client = new MongoClient(url);

try {
await client.connect( { useUnifiedTopology: true});

await findOneBrandByName(client, "tori");
} catch (err){
    console.error(err);
} finally {
    await client.close();
}
}

main().catch(console.error);``

async function findOneBrandByName(client, nameOfBrand){
const result = await client.db("user_brand_db").collection("userData").fineOne({name: nameOfBrand});

    if(result){
        console.log(`Found a listing in the collection with the name ${nameOfBrand}`)
        console.log(result);
    } else {
        console.log(`No listings found with the '${nameOfBrand}'`);
    }
}



async function createMultipleUsers(client, newUsers) {
    const result = client.db("user_brand_db").collection("multipleUsers").insertMany(newUsers);

    console.log (`${result.insertedCount } new users creating with the following ids:`);

    console.log(result.insertedId);
}

async function createUser(client, newUser) {
    const result = await client.db("user_brand_db").collection("userData")
    .insertOne(newUser);

    console.log(`New list created with the following id: ${result.insertedId}`);
}


async function main(){
    const uri = process.env.MONGODBCONNECT;
    console.log(uri);
const client = new MongoClient(uri);

try {
await client.connect();

await listDatabases(client);
} catch (err){
    console.error(err);
} finally {
    await client.close();
}
}


async function listDatabases(client) {
   const databasesList = await client.db().admin().listDatabases();

   console.log("Databases:");
   databasesList.databases.forEach(db => {
       console.log(`- ${db.name}`);
   })
}


// app.use(require("./controllers/homeroutes"));
// app.use(require("./controllers/storeRoutes"));
// app.use(require("./controllers/userRoutes"));
