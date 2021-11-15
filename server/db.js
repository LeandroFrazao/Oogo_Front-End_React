require("dotenv").config({ path: "../server/.env/.env" });

const DB_NAME = "OOGO";
collectionName = "users";
query = "";
const MONGO_OPTIONS = { useUnifiedTopology: true, useNewUrlParser: true };
const { MongoClient } = require("mongodb");
const uri = process.env.MONGOURI;
console.log("uri:", uri);

module.exports = () => {
  const get = (collectionName, query = {}) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
        if (err) {
          console.log(err);
          return reject("Error: MongoClient.connect");
        }
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);
        collection.find(query).toArray((err, docs) => {
          if (err) {
            console.log(err);
            return reject("=== get:: collection.find");
          }
          resolve(docs);
          client.close();
        });
      });
    });
  };

  const add = (collectionName, item) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(uri, MONGO_OPTIONS, (err, client) => {
        if (err) {
          console.log(err);
          return reject("=== add:: MongoClient.connect");
        }
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);

        collection.insertOne(item, (err, result) => {
          if (err) {
            console.log(err);
            return reject("=== add:: collection.insertOne");
          }
          resolve(result);
          client.close();
        });
      });
    });
  };

  return {
    get,
    add,
  };
};
