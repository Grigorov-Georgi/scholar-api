import {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface BarChartProps {
    data: any;
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Cites per Year',
        },
    },
};

const BarChart = (props: BarChartProps) => {
    const {data} = props;

    const [modifiedCitesPerYear, setModifiedCitesPerYear] = useState<any>(null);

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
                            borderColor: "rgb(138,255,99)",
                            backgroundColor: "rgba(33,255,0,0.5)",
                        }
                    ]
            };

            setModifiedCitesPerYear(modifiedArray);
        }
    }, [data]);

    return (
        <div>
            { modifiedCitesPerYear ? <Bar data={modifiedCitesPerYear} options={options}/> : <div>No data!</div>}
        </div>
    );
};

export default BarChart;