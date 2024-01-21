// components/LoginForm.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../app/globals.css';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Replace with your API endpoint for login
      const loginEndpoint = 'http://localhost:3000/login';

      // Send a POST request to your login API endpoint
      const response = await axios.post(loginEndpoint, formData, {
        withCredentials: true,
      });

      if (response.data.success) {
        // Redirect to the dashboard after successful login
        console.log('Redirecting to the dashboard...');
        router.push('/dashboard');
      } else {
        // Handle login failure (show error message, etc.)
        console.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
