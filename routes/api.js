const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", async (req, res) => {
  const workouts = await Workout.find();
  try {
    res.json(workouts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  const workouts = await Workout.find();
  try {
    res.json(workouts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/workouts", async ({ body }, res) => {
  const newWorkout = Workout.create(body)
    try {
      res.json(newWorkout);
    } catch (err) {
      res.status(400).json(err);
    };
});

router.put("/api/workouts/:id", async (req, res) => {
  const updateWorkout = await Workout.findById(req.params.id, {
    $push: {
      exercises: req.body,
    },
  });
  try {
    res.status(200).json(updateWorkout);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
