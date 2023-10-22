import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { CustomTooltip } from "./CustomToolTip";


function StackedAreaGraph(props) {
  return (
    <AreaChart
      width={props.width}
      height={props.height}
      data={props.data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
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
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}

export default StackedAreaGraph;
