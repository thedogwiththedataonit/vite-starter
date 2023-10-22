
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { CustomTooltip } from "./CustomToolTip";

function LineGraph(props){
    console.log(props.data)

    
    return (
    <LineChart
            width={props.width}
            height={props.height}
            data={props.data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid 
                strokeDasharray="1 4" 
            />
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
            <Line 
                type="monotone" 
                dataKey="pv" 
                stroke="#8884d8" 
                activeDot={{ r: 8 }} 
                
                />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    )
}

export default LineGraph;