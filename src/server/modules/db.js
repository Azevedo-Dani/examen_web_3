/**
 * Imports
 */
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require('assert');



/**
 * Variables
 */
// Connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = process.env.DB_DB;



/**
 * Connect to the database
 */
const connect = () => {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(url);
        client.connect(function(err) {
            if (err) {
                console.log("[DB] Unable to connect to server: " + err.message);
                reject(err);
            } else {
                console.log("[DB] Connected successfully to server");
                exports.db = client.db(dbName);
                resolve(exports.db);
            }
        });
    });
};

/**
 * Ensure DB is in correct state for the Application
 */

 const boot = () => {
     findOne('users', {}).then(result => {
         if (!result) { // 0 users 
            const user = {
                "firstName": "Alfred",
                "lastName": "Shaw",
                "email": "alfred.shaw49@example.com",
                "password": "piazza"
            }
            insertOne('users', user).then(res => {
                console.log('User added')
            })
         }
     })
 }
 const findAll = (collection, search) => {
     return this.db.collection(collection).find({}).toArray()
 }

 const findOne = (collection, search) => {
     return this.db.collection(collection).findOne(search)
 }

 const insertOne = (collection, data) => {
     return this.db.collection(collection).insertOne(data)
 }

 const removeOne = (collection, search) => {
     return this.db.collection(collection).removeOne(search)
 }


/**
 * Exports
 */
exports.connect = connect;
exports.boot = boot;
exports.db = null; // db will be set after connected;
exports.ObjectID = mongodb.ObjectID;
exports.findOne = findOne
exports.findAll = findAll
exports.insertOne = insertOne
exports.removeOne = removeOne