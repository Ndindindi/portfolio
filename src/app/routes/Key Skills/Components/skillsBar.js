import React from 'react';
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import data2 from './data2';

const SkillsBar = () => (
    <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={data2}
                       margin={{top: 30, right: 0, left: -25, bottom: 0}}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke='#f5f5f5' />
            <Area type='monotone' dataKey='amt' fill='#ffc658' stroke='#ffc658' />
            <Bar dataKey='pv' barSize={20} fill='#3367d6' />+
        </ComposedChart>
    </ResponsiveContainer>
);

export default SkillsBar;