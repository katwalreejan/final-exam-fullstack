import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {

  const {login, error, isLoading}= useLogin();
  const navigate= useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO (Q9): Replace this console.log with actual login logic
    // - Import and use the useLogin hook from ../hooks/useLogin
    // - Call login(username, password) from the hook
    // - Display error from the hook if present
    // - Display a loading state on the button using isLoading from the hook
    // - Navigate to "/" on successful login
    const success= await login(username,password)
    if(success){
      navigate("/")
    }
  };

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button disabled={isLoading}>Login</button>
        {error && <p>style={{color:'red'}}</p>}

      </form>
    </div>
  );
};

export default LoginPage;
