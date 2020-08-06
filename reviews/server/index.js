const express = require('express');
const app = express();
const port = 1963;
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

app.get('/hey', (req, res) => res.send('ho!'))
app.listen(port, () => console.log(`Server is posted up at http://localhost:${port} `))
