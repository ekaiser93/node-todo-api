// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to server.');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert document.', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Erica',
  //   age: 25,
  //   location: '123 fdkjflsd'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Could not insert user');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
