const express = require("express");

const {
  getActivities,
  addActivity,
  deleteActivity
} = require("../controllers/activitiesController");

const router = express.Router();

/* Creating a route for the get request. */
router.get("/activities", getActivities);
/* Creating a route for the post request. */
router.post("/activity", addActivity);
/* Creating a route for the delete request. */
router.delete("/activity/:_id", deleteActivity);

module.exports = router;