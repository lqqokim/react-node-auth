const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const config = require('./../config/key');

const { User } = require('./model/User');

// application/x-www-form-urlencoded, req.body에 담을수 있도록
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World!!'));

app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            success: true
        })
    });
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// mongodb+srv://tonykim:<password>@cluster0-cp3gt.mongodb.net/<dbname>?retryWrites=true&w=majority
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://tonykim:<password>@cluster0-cp3gt.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });