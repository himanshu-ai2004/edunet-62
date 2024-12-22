import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/signin', {
        email,
        password,
      });
      alert('Login successful');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setError(err.response.data.msg);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <p>Dont't have account <a href="/signup">Sign Up</a></p>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
