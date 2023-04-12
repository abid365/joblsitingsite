import React from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    marks: 57
  },
  {
    name: "Assignment 2",
    marks: 59
  },
  {
    name: "Assignment 3",
    marks: 50
  },
  {
    name: "Assignment 4",
    marks: 27
  },
  {
    name: "Assignment 5",
    marks: 55
  },
  {
    name: "Assignment 6",
    marks: 53
  },
  {
    name: "Assignment 7",
    marks: 60
  }
];

const Stats = () => {
  return (
    <div className="mt-16">
      <ResponsiveContainer width="100%" height={500}>
          <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0
                }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    </ResponsiveContainer>
    </div>
    
    
  );
};

export default Stats;