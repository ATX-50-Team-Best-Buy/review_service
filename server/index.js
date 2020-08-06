const express = require('express');
const app = express();
const port = 1963;
const path = require('path')
const database = require('../database/index.js');
const data = require('../phoneData.js');

// app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
//
// database.seed(database.productSchema, data.data);

app.get('/heyyo', (req, res) => res.send('ho!'))
app.listen(port, () => console.log(`Server is posted up at http://localhost:${port} `))
