import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = formValues;
    if (!name || !email || !password || !confirmPassword) {
      return 'All fields are required.';
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setStatus({ message: validationError, type: 'error' });
      return;
    }

    // Simulating a successful form submission
    setStatus({ message: 'Registration successful!', type: 'success' });
    console.log('Form submitted:', formValues);

    // Reset form fields after successful submission
    setFormValues({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <p className="text-center text-gray-600 mb-4">Start your journey with us!</p>

        {status.message && (
          <p
            className={`text-center mb-4 ${
              status.type === 'error' ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {status.message}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {['name', 'email', 'password', 'confirmPassword'].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-600"
              >
                {field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                id={field}
                value={formValues[field]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Enter your ${field === 'confirmPassword' ? 'password again' : field}`}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
