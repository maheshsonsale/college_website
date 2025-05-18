import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; // Import your CSS file for styling

const Login = () => {
  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const userDetails = [
    { uname: 'mahesh', pass: 12345 },
    { uname: 'rahul', pass: 58213 },
    { uname: 'anita', pass: 94720 },
    { uname: 'vikas', pass: 36158 },
    { uname: 'neha', pass: 72904 },
    { uname: 'arjun', pass: 18462 },
    { uname: 'rhea', pass: 60391 },
    { uname: 'sameer', pass: 27589 },
    { uname: 'kriti', pass: 45017 },
    { uname: 'sahil', pass: 83642 },
    { uname: 'divya', pass: 39105 }
  ]
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError('Both fields are required!');
      return;
    }
    const unval=userDetails.find(e=>e.uname ==username.trim() && e.pass==Number(password))
    if (unval) {
      navigate('/dashboard',{state:{name:unval.uname}})  // Redirect to student dashboard page
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">

        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
