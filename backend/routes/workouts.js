const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
<<<<<<< HEAD
  updateWorkout,
  deleteWorkout,
=======
  deleteWorkout,
  updateWorkout,
>>>>>>> 61056082f4ca8b52a8e74ec49b086fc2df44dcca
} = require('../controllers/workoutController');

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;
