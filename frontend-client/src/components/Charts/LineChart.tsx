import {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
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

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

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

const data = {
    "cites_per_year": {
        "2013": 1,
        "2014": 6,
        "2015": 1,
        "2016": 7,
        "2017": 8,
        "2018": 15,
        "2019": 6,
        "2020": 20,
        "2021": 14,
        "2022": 11,
        "2023": 9
    }
};

const LineChart = () => {
    // const {data} = props;

    const [modifiedCitesPerYear, setModifiedCitesPerYear] = useState<any>([]);

    useEffect(() => {
        if (data) {
            const citesPerYear = Object.entries(data["cites_per_year"])
                .map(([year, value]) => ({
                    year,
                    value
                }));

            const modifiedArray = {
                labels: citesPerYear.map((row) => row.year),
                datasets:
                    [
                        {
                            label: "Count",
                            data: citesPerYear.map((row) => row.value),
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 99, 132, 0.5)",
                        }
                    ]
            };

            setModifiedCitesPerYear(modifiedArray);
        }
    }, [data]);

    // if (!data || !modifiedCitesPerYear.label || !modifiedCitesPerYear.datasets) return <div>No data!</div>;

    return (
        <div>
            <Line data={modifiedCitesPerYear} options={options}/>
        </div>
    );
};

export default LineChart;