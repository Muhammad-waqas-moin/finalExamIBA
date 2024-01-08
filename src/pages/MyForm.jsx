import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MyForm = () => {
  const dispatch = useDispatch();
  const [poetname, setpoetName] = useState("");
  const [poetdata, setPoetData] = useState("");
  //   const [formData, setFormData] = useState({
  //     poet: "",
  //     data: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const handleSend = () => {
    axios
      .post("http://localhost:5000/api/v1/createPoetry", {
        poet: poetname,
        data: poetdata,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });

    setpoetName("");
    setPoetData("");
  };
  const handleSubmit = (e) => {
    console.log(poetdata, poetname);
    e.preventDefault();
    handleSend();

    console.log("Form submitted:");
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
            value={poetname}
            onChange={(e) => setpoetName(e.target.value)}
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
            value={poetdata}
            onChange={(e) => setPoetData(e.target.value)}
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
