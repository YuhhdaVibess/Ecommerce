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
app.use(cors());
//const http = require('http');


const db = pgp({
    host: "127.0.0.1", 
    port: '5432',
    database: "bkicksdb",
    user: "music",
    password: "Password"
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


app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});