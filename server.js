const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`<h1>First AWS Project!</h1>`)
})

app.get('/test', (req, res) => {
  res.send(`<h1>First AWS Project Working!</h1>`)
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started on port 5000');
});