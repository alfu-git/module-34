import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const students = [
  { id: 1, name: "Rahim", marks: 85 },
  { id: 2, name: "Karim", marks: 78 },
  { id: 3, name: "Amina", marks: 92 },
  { id: 4, name: "Jamal", marks: 74 },
  { id: 5, name: "Sadia", marks: 88 },
  { id: 6, name: "Nusrat", marks: 81 },
  { id: 7, name: "Hasan", marks: 69 },
  { id: 8, name: "Rafi", marks: 95 }
];

const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && label) {
    const student = payload[0].payload;

    return(
      <div style={{
        background: "#fff",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px"
      }}>
        <p><strong>{label}</strong></p>
        <p>Marks: {student.marks}</p>
        <p>Subject: {student.subject}</p>
      </div>
    );
  }
  return null;
};

const Chart = () => {
  return (
    <div>
      <h2 className='mb-10 text-5xl font-semibold text-center'>Bar Chart</h2>

      <p className='ml-20 mb-5 text-lg font-medium'>Gym Competition Marks Chart</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={students}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip content={<CustomTooltip></CustomTooltip>}></Tooltip>
          <Bar dataKey="marks" fill="#8884d8"></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;