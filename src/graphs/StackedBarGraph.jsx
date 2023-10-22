import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { CustomTooltip } from "./CustomToolTip";

function StackedBarGraph(props) {
  return (
    <BarChart
      width={props.width}
      height={props.height}
      data={props.data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="2 4" />
      <XAxis 
                dataKey="name"
                stroke="grey"
                tick={
                    {
                        fill: "grey"
                    }
                }
                style={
                    {
                        fontSize: ".8rem",
                        fontWeight: "600",
                    }
                } />
        <YAxis 
                stroke="grey"
                tick={
                    {
                        fill: "grey"
                    }
                }
                style={
                    {
                        fontSize: ".8rem",
                        fontWeight: "500",
                    }
                } />
        <Tooltip 
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
            />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" 
        onClick={(e)=>console.log(e)}
        />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" 
        onClick={(e)=>console.log(e)}
        />
    </BarChart>
  );
}

export default StackedBarGraph;