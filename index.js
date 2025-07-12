const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));


app.get('/api/sweets', (req, res) => {
  const sweets = fs.readFileSync('./data/sweets.json', 'utf8');
  res.json(JSON.parse(sweets));
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🍬 Server running at http://localhost:${PORT}`);
});
