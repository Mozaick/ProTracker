load("/docker-entrypoint-initdb.d/activitiesData.js");
db = db.getSiblingDB("actions");
db.activities.insert(activitiesData);