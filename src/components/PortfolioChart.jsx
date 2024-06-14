import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const color = {
  Bajaj: {
    color: "#6c63ff",
    data: 25000,
  },
  sriram: {
    color: "#fa9d17",
    data: 20000,
  },
  mahindra: {
    color: "#b9c606",
    data: 15000,
  },

  utkarsh: {
    color: "#59cbd3",
    data: 40000,
  },
};

const data = Object.values(color).map((item) => item.data);
const backgroundColor = Object.values(color).map((item) => item.color);

const chartData = {
  datasets: [
    {
      data,
      backgroundColor,
      hoverOffset: 2,
    },
  ],
};
const options = {
  plugins: {
    datalabels: {
      color: "white",
      display: true,
      font: {
        size: 10,
      },
      formatter: (value, context) => {
        const dataset = context.chart.data.datasets[0];
        const total = dataset.data.reduce((acc, val) => acc + val, 0);
        const percentage = ((value / total) * 100).toFixed(0) + "%";
        return `${value} (${percentage})`;
      },
    },
    legend: {
      position: "bottom",
    },
  },
  maintainAspectRatio: false,
};

export function PortfolioChart() {
  return (
    <div style={{ width: "200px", height: "180px" }}>
      <Pie data={chartData} options={options} />
    </div>
  );
}

export default PortfolioChart;
