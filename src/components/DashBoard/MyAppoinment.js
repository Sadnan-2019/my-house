import React, { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyAppoinment = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
     return (
      <div>
      <h1 className="text-center my-instrument py-4">My Chart</h1>
      <div className="flex justify-center items-center   ">
            
            <div className="">
              <BarChart width={600} height={300} data={datas}>
                <XAxis dataKey="month" tick="investment" />
                <YAxis  />
                <Tooltip></Tooltip>
                <Bar dataKey="sell"   barSize={30} fill="#8884d8" label="investment" />
              </BarChart>
            </div>
             
      
            <div className=" ">
              <PieChart width={400} height={400}>
                <Pie
                  data={datas}
                  dataKey="sell"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={datas}
                  dataKey="investment"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
                <Tooltip></Tooltip>
              </PieChart>
            </div>
          </div>
         </div>
     );
};

export default MyAppoinment;