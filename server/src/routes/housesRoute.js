const express = require('express');
const { fetchHouses, filterHousesByName } = require('../controllers/housesController');

const router = express.Router();

router.get('/houses', async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const filteredHouses = await filterHousesByName(name);
      res.json(filteredHouses);
    } else {
      const houses = await fetchHouses();
      res.json(houses);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;