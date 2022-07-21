const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a new workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a new workout' });
});

module.exports = router;
