import React, { useState } from "react";
import "./App.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      setSuccess(false);
    } else {
      setError({});
      setSuccess(true);
      console.log({ email, password });

      setEmail('')
      setPassword('')
    }
  };

  return (
    <div className='login-form-container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your Email'
            />
          </label>
          {error.email && <p className='error-message'>{error.email}</p>}
        </div>
        <div>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Your Password'
            />
          </label>
          {error.password && <p className='error-message'>{error.password}</p>}
        </div>
        <button type='submit'>Login</button>
      </form>
      {success && <h2 className='success-message'>Login Successful!</h2>}
    </div>
  );
};

export default LoginForm;
