const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Example data to render in the EJS template
const rewards = [
  { name: 'Monthly Leaderboard Winner 🏆', points: 100 },
  { name: 'Share With 5 Friend', points: 50 },
  { name: 'Earn daily win Big Reward!', points: 25 },
  { name: 'Claim 10 Points Every Hour', points: 50 },
  { name: 'Weekly Leaderboard Prize', points: 50 }
];

app.get('/', (req, res) => {
  res.render('index', { rewards });  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
