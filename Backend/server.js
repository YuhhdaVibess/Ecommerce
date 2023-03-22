//const SneaksAPI = require('sneaks-api');
//const sneaks = new SneaksAPI();


//import {useEffect, useState} from 'react'

//const [products, setProducts] = useState([]);

//useEffect(() => {
 //   sneaks.getProducts("Yeezy Cinder", 10, function(err, products){
 //       console.log(products)
 //   })
//})

//console.log('yuhh')
const pgp = require('pg-promise')();
const port = 5000;
const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');


const register = require('./controllers/register');
const login = require('./controllers/login');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//const http = require('http');

  

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt);});
app.post('/login', (req, res) => { login.handleSignin(req, res, db, bcrypt) });

const db = pgp({
    host: "127.0.0.1", 
    port: '5432',
    database: "bkicksdb",
    user: "music",
    password: "Ilovehaley101!"
  });

app.get('/shoes', (req, res) => {
  db.any('SELECT * FROM shoes')
  .then(data => {
    res.json(data)
  })
  .catch(error => {
      console.log(error);
  });

});

app.get('/sizes', (req, res) => {
  db.any('SELECT * FROM sizes')
  .then(data => {
    res.json(data)
  })
  .catch(error => {
      console.log(error);
  });

});


app.put('/account/updateinformation', async (req, res) => {
  try {
    const { email, oldEmail } = req.body;
    const updateEmailQuery = `UPDATE users SET email=$1 WHERE email=$2`;
    const result = await db.none(updateEmailQuery, [email, oldEmail]);
    res.json({ message: 'Email updated successfully' });
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error updating email' });
  }
});

app.get('/', (req, res) => {
  res.send('yuhh');
})


app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});