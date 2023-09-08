import React, { useState } from 'react';
import AnimatedProgressBar from "./AnimatedProgressBar";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl mb-4">Gymbro Weight Tracker</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">User ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
        {/* add tertiary logic here show/hide while api has not yet returned a promise etc */}
        <AnimatedProgressBar/>
      </form>
    </div>
  );
};

export default LoginForm;
