const router = require("express").Router();
const  Workout  = require("../models/Workout.js");

router.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $match: {},
      },
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    console.log(workouts);
    res.json(workouts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/workouts", async ({ body }, res) => {
  try {
    const newWorkout = Workout.create(body);
    console.log(newWorkout);
    res.json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const updateWorkout = await Workout.findOneAndUpdate(req.params.id, {
      $push: {
        exercises: req.body,
      },
    });
    console.log(updateWorkout);
    res.status(200).json(updateWorkout);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
