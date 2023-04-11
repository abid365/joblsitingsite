import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";

  const data = [
    {
      subject: "A1",
      A: 58,
      B: 110,
      fullMark: 60
    },
    {
      subject: "A2",
      A: 59,
      B: 130,
      fullMark: 60
    },
    {
      subject: "A3",
      A: 50,
      B: 130,
      fullMark: 60
    },
    {
      subject: "A4",
      A: 27,
      B: 100,
      fullMark: 60
    },
    {
      subject: "A5",
      A: 55,
      B: 90,
      fullMark: 60
    },
    {
      subject: "A6",
      A: 53,
      B: 85,
      fullMark: 60
    },
    {
        subject: "A7",
        A: 60,
        B: 85,
        fullMark: 60
      }
  ];

const Stats = () => {
    return (

        <div className='grid lg:grid-cols-2'>
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={100}
                width={500}
                height={500}
                data={data}
              >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
            <div className="text-center p-10">
              <h1>Assignment1:58</h1>
              <h1>Assignment2:59</h1>
              <h1>Assignment3:50</h1>
              <h1>Assignment4:27</h1>
              <h1>Assignment5:55</h1>
              <h1>Assignment6:53</h1>
              <h1>Assignment7:60</h1>
            </div>
        </div>
    );
};

export default Stats;