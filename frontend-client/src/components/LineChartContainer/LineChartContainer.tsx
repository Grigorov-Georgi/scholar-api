import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface LineChartContainerProps {
  citesPerYear: { [key: string]: number };
}

interface TransformedCitationData {
  year: string;
  citations: number;
}

export const LineChartContainer = (props: LineChartContainerProps) => {
  const { citesPerYear } = props;

  const transformCitationData = (rawCites: {
    [key: string]: number;
  }): TransformedCitationData[] => {
    const rawArrayData = Object.entries(rawCites);
    const transformedData: TransformedCitationData[] = rawArrayData.map(
      (rawEntry) => {
        return { year: rawEntry[0], citations: rawEntry[1] };
      }
    );
    console.log(transformedData);
    return transformedData;
  };
  return (
    <>
      <h3>Citations per year</h3>
      <LineChart
        title="Total citations per yer"
        width={400}
        height={400}
        data={transformCitationData(citesPerYear)}
        margin={{ top: 30, right: 20, bottom: 5, left: 10 }}
      >
        <Line type="linear" dataKey="citations" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
};
