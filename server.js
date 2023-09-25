const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data.json'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
