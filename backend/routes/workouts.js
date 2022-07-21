const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ message: 'GET all workouts' });
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({ message: 'GET single workout' });
});

// POST new workout
router.post('/', (req, res) => {
  res.json({ message: 'POST a new workout' });
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a new workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a new workout' });
});

module.exports = router;
