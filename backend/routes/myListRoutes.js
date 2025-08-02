const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const myListSchema = new mongoose.Schema({
  movieId: Number,
  title: String,
  poster_path: String,
});

const MyList = mongoose.model('MyList', myListSchema);

// POST: Add movie to My List
router.post('/', async (req, res) => {
  try {
    const { movieId, title, poster_path } = req.body;
    const movie = new MyList({ movieId, title, poster_path });
    await movie.save();
    res.status(201).json({ message: 'Movie added to My List' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Get all movies in My List
router.get('/', async (req, res) => {
  try {
    const list = await MyList.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
