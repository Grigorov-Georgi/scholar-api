import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  publicationsData: { citation: string; title: string; pub_year?: string }[];
}

interface ModifiedData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Cites per Year",
    },
  },
};

const BarChart = (props: BarChartProps) => {
  const { publicationsData } = props;
  const [modifiedCitesPerYear, setModifiedCitesPerYear] =
    useState<ModifiedData>({ labels: [], datasets: [] });

  const extractPubsPerYear = () => {
    const years = publicationsData.map((entry) => entry.pub_year);
    let count: { [key: string]: number } = {};
    years.forEach((year) => {
      if (year) {
        count[year] = (count[year] || 0) + 1;
      }
    });
    const noDataPubs = years.filter((year) => !year);
    count = { ...count, "No Data": noDataPubs.length };
    return count;
  };

  useEffect(() => {
    if (publicationsData) {
      const count = extractPubsPerYear();
      const modifiedArray: ModifiedData = {
        labels: Object.keys(count),
        datasets: [
          {
            label: "Count",
            data: Object.values(count),
            borderColor: "#8884d8",
            backgroundColor: "#8884d8",
          },
        ],
      };

      setModifiedCitesPerYear(modifiedArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicationsData]);

  return (
    <div>
      <h3>Publications per year</h3>
      {modifiedCitesPerYear ? (
        <Bar data={modifiedCitesPerYear} options={options} />
      ) : (
        <div>No data!</div>
      )}
    </div>
  );
};

export default BarChart;
