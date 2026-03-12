import { useState } from "react";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  // TODO (Q6): Replace this console.log with actual signup logic
  // - Import and use the useSignup hook from ../hooks/useSignup
  // - Call signup({ name, username, password, phone_number, address }) from the hook
  // - Display error from the hook if present
  // - Display a loading state on the button using isLoading from the hook
  // - Navigate to "/" on successful signup

  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await signup({
      name,
      username,
      password,
      phone_number,
      address,
    });

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button disabled={isLoading}>Sign Up</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
