const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  console.log('Inside GET request');
  res.status(200);
  res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
