import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import MyForm from "./pages/MyForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchPortry } from "./features/poetry/poertrySlice";
// import "./App.css";
import GetAllPoetry from "./pages/GetAllPoetry";
import axios from "axios";
function App() {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(fetchPortry());
  }, []);
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
