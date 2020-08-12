const express = require('express');
const app = express();
const port = 1963;
const path = require('path')
const db = require('../database/index.js');
const data = require('../phoneData.js');
const cors = require('cors');

// app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/reviews', (req, res) => {
  db.getAllReviews()
  .then(reviews => {
    res.status(200).send(reviews);
  })
  .catch(error =>{
    res.status(500).send('Error retrieving reviews from db: ', error);
  })
})

app.post('/reviews', (req, res) => {
  // console.log(req.body)
  db.saveReviewToDB(req.body)
  .then(confirmation => {
    res.status(200).send(confirmation);
  })
  .catch(error => {
    res.status(500).send("Error on server writing review: ", error);
  })
})


app.listen(port, () => console.log(`Server is posted up at http://localhost:${port} `))
