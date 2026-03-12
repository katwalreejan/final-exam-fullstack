const express = require("express");
const router = express.Router();
const requiteAuth= require("../middleware/requireAuth")
const {
  getAllWorkouts,
  createWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutControllers");

// GET /api/workouts
router.get("/", getAllWorkouts);

// POST /api/workouts
router.post("/", requiteAuth, createWorkout);

// GET /api/workouts/:workoutId
router.get("/:workoutId", getWorkoutById);

// PUT /api/workouts/:workoutId
router.put("/:workoutId", requiteAuth, updateWorkout);

// DELETE /api/workouts/:workoutId
router.delete("/:workoutId", requiteAuth, deleteWorkout);

module.exports = router;
