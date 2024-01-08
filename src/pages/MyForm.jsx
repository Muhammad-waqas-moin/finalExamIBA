import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    data: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex justify-center">
            <h1 className="font-bold text-3xl "> ADD YOUR POETRY</h1>
          </div>
          <label
            htmlFor="name"
            className="block text-gray-600 font-semibold mb-2"
          >
            Poet Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your Poet name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="data"
            className="block text-gray-600 font-semibold mb-2"
          >
            Poetry:
          </label>
          <input
            type="text"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your Poetry"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
