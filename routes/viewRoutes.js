const router = require('express').Router();
const path = require('path');

// dont need root route 
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;
