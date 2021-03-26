import * as React from "react";
import { PieChart } from "react-native-svg-charts";

export default function Diagram() {
  const data = [
    {
      key: 1,
      value: 5,
      svg: { fill: "brown" },
    },
    {
      key: 2,
      value: 5,
      svg: { fill: "#87CEEB" },
    },
    {
      key: 3,
      value: 10,
      svg: { fill: "orange" },
    },
    {
      key: 4,
      value: 80,
      svg: { fill: "blue" },
    },
  ];

  return <PieChart data={data} innerRadius="50%" style={{ height: 200 ,width:200}} />;
}
