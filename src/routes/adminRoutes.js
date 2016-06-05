var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
  {
    title: 'War and Peace',
    genre:  'Historical Fiction',
    author: 'Babu Hari',
    read: false
  },
  {
    title: 'War and Peace 2',
    genre:  'Historical Fiction',
    author: 'Chinna Babu',
    read: false
  },
  {
    title: 'War and Peace 3',
    genre:  'Historical Fiction',
    author: 'Pedda Babu',
    read: false
  },
  {
    title: 'War and Peace 5',
    genre:  'Historical Fiction',
    author: 'Chala Pedda babu',
    read: false
  }
];
var router = function (nav) {
  adminRouter.route('/addBooks')
    .get(function(req, res) {
      var url = 'mongodb://localhost:27017/libraryApp';

      mongodb.connect(url, function (err, db) {
        var collection = db.collection('books');
        collection.insertMany(books, function (err, results) {
          res.send(results);
          db.close();
        });
      });
      //res.send('inserting books');
    });
  return adminRouter;
};

module.exports = router;
