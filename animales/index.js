const express = require('express');
const path = require('path');

const app = express();
const port = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});