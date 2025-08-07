import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const PriceChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/prices')
            .then(res => setData(res.data));
    }, []);

    const chartData = {
        labels: data.map(d => d.date),
        datasets: [{
            label: 'Brent Oil Price',
            data: data.map(d => d.price),
            borderColor: 'blue',
            fill: false
        }]
    };

    return <Line data={chartData} />;
};

export default PriceChart;
