import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import './chart.css';

export default function Chart({ title, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#26a69a" />
                    <Line type="monotone" dataKey={dataKey} stroke="#26a69a" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#b2dfdb" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
