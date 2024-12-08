"use client";
import React, { useState } from "react";
import faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function WeeklySalesChart() {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(0, 137, 132)',
            backgroundColor: 'rgba(0, 137, 132, 0.5)',
          },
        ],
      }
    },
    {
      title: "Orders",
      type: "order",
      data: {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
  ];
  const [chartTobDisplay, setChartTobDisplay] = useState(tabs[0].type);
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Sales</h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                <li key={i} className="me-2">
                  <button
                    className={
                      chartTobDisplay == tab.type
                        ? "active inline-block p-4 text-orange-600 border-b-2 border-transparent border-orange-600 rounded-t-lg dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-100 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                    onClick={() => {setChartTobDisplay(tab.type)}}
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Content to display  */}
        <div>
          {
            tabs.map((tab, i) => {
              if (chartTobDisplay === tab.type) {
                return (
                  <div key={i} className="mt-4">
                    <h2 >{tab.title}</h2>
                    <Line options={options} data={tab.data} />
                  </div>
                )
              }
              return null
            })
          }
        </div>
      </div>
    </div>
  );
}
