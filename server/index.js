const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tonykim:admin1234@cluster0-cp3gt.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!!'));
app.listen(port, () => console.log(`Example app listening on port ${port}`));

// mongodb+srv://tonykim:<password>@cluster0-cp3gt.mongodb.net/<dbname>?retryWrites=true&w=majority
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://tonykim:<password>@cluster0-cp3gt.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });