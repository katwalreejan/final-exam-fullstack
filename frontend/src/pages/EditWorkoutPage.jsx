import { useParams, useNavigate } from "react-router-dom";

const EditWorkoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO (Q5): Implement this component
  // - Fetch the existing workout from /api/workouts/:id on mount
  // - Create state variables for all form fields (use AddWorkoutPage as reference)
  // - Pre-fill the form with fetched data
  // - On submit: PUT to /api/workouts/:id with the updated data
  //   Build request body same as AddWorkoutPage
  // - Navigate to /workouts/:id on success
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [session_price, setSessionPrice] = useState("");
  const [fitness_level, setFitnessLevel] = useState("");
  const [status, setStatus] = useState("");
  const [required_equipment, setRequiredEquipment] = useState("");
 useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(`/api/workouts/${id}`);
      const data = await response.json();

      if (response.ok) {
        setWorkoutTitle(data.workoutTitle);
        setDescription(data.description);
        setCity(data.city);
        setState(data.state);
        setSessionPrice(data.session_price);
        setFitnessLevel(data.fitness_level);
        setStatus(data.status);
        setRequiredEquipment(data.required_equipment);
      }
    };

    fetchWorkout();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      workoutTitle,
      description,
      city,
      state,
      session_price,
      fitness_level,
      status,
      required_equipment,
    };

    const response = await fetch(`/api/workouts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    });

    if (response.ok) {
      navigate(`/workouts/${id}`);
    }
  };


  return (
    <div className="create">
      <h2>Update Workout</h2>
      <p>TODO: Implement this page</p>
        <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Workout Title"
          value={workoutTitle}
          onChange={(e) => setWorkoutTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <input
          type="number"
          placeholder="Session Price"
          value={session_price}
          onChange={(e) => setSessionPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Fitness Level"
          value={fitness_level}
          onChange={(e) => setFitnessLevel(e.target.value)}
        />

        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <input
          type="text"
          placeholder="Required Equipment"
          value={required_equipment}
          onChange={(e) => setRequiredEquipment(e.target.value)}
        />

        <button type="submit">Update Workout</button>

      </form>
    </div>
  );
};

export default EditWorkoutPage;