import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

interface LineChartProps {
  data: any;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Cites per Year",
    },
    maintainAspectRatio: false,
    aspectRatio: 1,
  },
};

const LineChart = (props: LineChartProps) => {
  const { data } = props;

  const [modifiedCitesPerYear, setModifiedCitesPerYear] = useState<any>(null);

  useEffect(() => {
    if (data) {
      const citesPerYear = Object.entries(data["cites_per_year"]).map(
        ([year, value]) => ({
          year,
          value,
        })
      );

      const modifiedArray = {
        labels: citesPerYear.map((row) => row.year),
        datasets: [
          {
            label: "Count",
            data: citesPerYear.map((row) => row.value),
            borderColor: "rgb(138,255,99)",
            backgroundColor: "rgba(33,255,0,0.5)",
          },
        ],
      };

      setModifiedCitesPerYear(modifiedArray);
    }
  }, [data]);

  return (
    <div>
      <h3>Citations per year</h3>
      {modifiedCitesPerYear ? (
        <Line data={modifiedCitesPerYear} options={options} />
      ) : (
        <div>No data!</div>
      )}
    </div>
  );
};

export default LineChart;
