import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MyForm from "./pages/MyForm";

// import "./App.css";
import GetAllPoetry from "./pages/GetAllPoetry";
import axios from "axios";
function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const data = await axios
  //       .get("http://localhost:5000/api/v1/getPoetry")
  //       .then((response) => response.data);
  //     console.log(data);
  //   };
  //   fetchApi();
  // }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetAllPoetry />} />
          <Route path="/add" element={<MyForm />} />
        </Routes>
      </Router>
      {/* <GetAllPoetry /> */}
    </>
  );
}

export default App;
