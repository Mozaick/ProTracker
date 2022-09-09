const Activities = require('../models/activitiesModel');

/**
 * It's an async function that uses the Activity model to find all activities and
 then returns a status of 200 with the activities in the response body.
 */
const getActivities = async (req, res) => {
  try {
    const allActivities = await Activities.find();
    res.status(200).json(allActivities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * It creates a new activity and saves it to the database.
 */
const addActivity = async (req, res) => {
  const activity = new Activities();

  try {
    const newActivity = await activity.save(req.body);
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getActivities,
  addActivity,
};
