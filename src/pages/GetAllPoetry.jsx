import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPortry } from "../features/poetry/poertrySlice";
const GetAllPoetry = () => {
  const { data } = useSelector((state) => state.poetry.poetry);
  console.log(data);
  const [myPoetry, setMyPoetry] = useState([]);
  const dispatch = useDispatch();

  const handleReq = () => {
    // dispatch(fetchPortry());
    // setMyPoetry(poetry.data);
  };

  useEffect(() => {
    handleReq();
    // dispatch(fetchPortry());
    // setMyPoetry(poetry.data);
    // console.log(poetry.data);
  }, []);
  console.log(myPoetry);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        View All Poetry
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                {item?.poet}
              </h3>
              <p className="text-gray-700">{item?.data}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetAllPoetry;
