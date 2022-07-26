const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get all Workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createAt: -1 });

  res.status(200).json(workouts);
};

// Get a Single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: 'No such workout' });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ err: 'No such workout' });
  }

  res.status(200).json(workout);
};

// Create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push('title');
  }
  if (!load) {
    emptyFields.push('load');
  }
  if (!reps) {
    emptyFields.push('reps');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ err: 'Please fill in all fields', emptyFields });
  }

  // Add documents to DB
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

// Delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      err: 'No such workout',
    });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({
      err: 'No such workout',
    });
  }

  res.status(200).json(workout);
};

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      err: 'No such workout',
    });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({
      err: 'No such workout',
    });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
