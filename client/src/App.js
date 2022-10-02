import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/activities`
      );
      const data = await response.json();
      setActivities(data);
    };
    fetchData();
  }, [activities.length]);

  const addActivity = async (event) => {
    event.preventDefault();

    const newActivity = {
      name: event.target.activity.value,
      time: event.target.time.value,
    };

    await fetch(`${process.env.REACT_APP_API_URL}/activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newActivity),
    });
    event.target.activity.value = ''; 
    event.target.time.value = ''; 
    window.location.reload();
  };

  const deleteActivity = async (activityId) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/activity/${activityId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    setActivities(data);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Activity Tracker</h1>
        <form onSubmit={addActivity}>
          <div>
            <label htmlFor="activity">Activity:</label>
            <input
              type="text"
              id="activity"
              name="activity"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="time">Time Taken:</label>
            <input type="text" id="time" name="time" autoComplete="off" />
          </div>
          <button type="submit">Add</button>
        </form>
      </header>
      <main>
        <h2>Today</h2>

        {activities && activities.length > 0 ? (
          <div>
            {activities.map((activity) => (
              <p key={activity._id}>
                {activity.name} - {activity.time}{' '}
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => deleteActivity(activity._id)}
                >
                  - 🗑
                </span>
              </p>
            ))}
          </div>
        ) : (
          <p>No activities yet</p>
        )}
      </main>
    </div>
  );
}

export default App;
