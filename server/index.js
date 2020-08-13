const express = require('express');
const app = express();
const port = 1963;
const path = require('path')
const db = require('../database/index.js');
const data = require('../phoneData.js');
const cors = require('cors');

app.use(express.static(path.join(__dirname, '../client/build')));
console.log('PATH: ', path.join(__dirname, 'build', 'index.html'))
app.use(cors());
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/reviews', (req, res) => {
  req.query.productID = Number.parseInt(req.query.productID);
  // console.log("REQUEST IN SERVER: ", req.query);
  // db.getAllReviews()
  db.getReviewsByProductID(req.query)
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
