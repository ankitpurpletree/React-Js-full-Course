import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formValues.email || !formValues.password) {
      setStatus({ message: 'Please fill out all fields.', type: 'error' });
      return;
    }

    // Simulating successful login
    setStatus({ message: 'Login successful!', type: 'success' });
    console.log('Form submitted:', formValues);

    // Reset form fields after submission (optional)
    setFormValues({
      email: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-4">Sign in to your account</p>

        {status.message && (
          <p
            className={`text-center mb-4 ${
              status.type === 'error' ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {status.message}
          </p>
        )}

        <div className="flex space-x-4 justify-center mb-6">
          <button className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md flex items-center justify-center">
            <span className="mr-2">🔵</span> Google
          </button>
          <button className="w-1/3 bg-gray-800 hover:bg-black text-white py-2 rounded-md flex items-center justify-center">
            <span className="mr-2">👤</span> GitHub
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or sign in with email</span>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          <button
  type="button"
  onClick={() => setShowPassword((prev) => !prev)}
  className="absolute right-3 top-7 text-gray-500 hover:text-gray-800"
>
  {showPassword ? '🙈' : '👁️'}
</button>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="form-checkbox text-blue-600 rounded-md" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <Link to="#" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
