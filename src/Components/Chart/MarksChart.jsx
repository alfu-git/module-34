import React, { use } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && label) {
    const student = payload[0].payload;

    return (
      <div
        style={{
          background: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <p>
          <strong>{label}</strong>
        </p>
        <p>Marks: {student.total}</p>
      </div>
    );
  }
  return null;
};

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      mathMarks: studentData.marks.math,
      englishMarks: studentData.marks.english,
      scienceMarks: studentData.marks.science,
    };
    const totalMarks =
      student.mathMarks + student.englishMarks + student.scienceMarks;
    student.total = totalMarks;

    return student;
  });

  return (
    <div>
      <p className="ml-20 mb-5 text-lg font-medium">Students Marks Chart</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={marksChartData}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip content={<CustomTooltip />}></Tooltip>
          <Bar dataKey="total" fill="#8884d8"></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksChart;
