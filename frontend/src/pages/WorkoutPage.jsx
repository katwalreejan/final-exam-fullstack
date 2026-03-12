import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const WorkoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO (Q4): Implement this component
  // - Fetch the workout from /api/workouts/:id when the component mounts (useEffect)
  // - Store the workout in state (useState)
  // - Display ALL workout fields:
  //   workoutTitle, description,
  //   city, state, session price, fitness level, status,
  //   required equipment
  // - Add a Delete button that sends DELETE to /api/workouts/:id and navigates to "/"
  // - Add an Edit link to /edit-workout/:id

  const [workout, setWorkout] = useState(null);
 useEffect(() => {
  const fetchWorkout = async () => {
    const response = await fetch(`/api/workouts/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const json = await response.json();
    if (response.ok) {
      setWorkout(json);
    }
  };

  fetchWorkout();
}, [id]);


  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${id}`, {
      method: "DELETE",
         headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      navigate("/");
    }
  };
  if (!workout) {
    return <div>Loading...</div>;
  }
  return (
   <div className="rental-preview">
      <h2>Workout Details</h2>

      <p><strong>Title:</strong> {workout.workoutTitle}</p>
      <p><strong>Description:</strong> {workout.description}</p>
      <p><strong>City:</strong> {workout.city}</p>
      <p><strong>State:</strong> {workout.state}</p>
      <p><strong>Session Price:</strong> {workout.session_price}</p>
      <p><strong>Fitness Level:</strong> {workout.fitness_level}</p>
      <p><strong>Status:</strong> {workout.status}</p>
      <p><strong>Required Equipment:</strong> {workout.required_equipment}</p>

      <button onClick={handleDelete}>Delete</button>

      <br /><br />

      <Link to={`/edit-workout/${id}`}>Edit Workout</Link>
    </div>
  );
};

export default WorkoutPage;
