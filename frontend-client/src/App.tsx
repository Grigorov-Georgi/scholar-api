import {useLayoutEffect, useRef, useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import BarChart from "./components/Charts/BarChart.tsx";
import {getAuthorInformation} from "./http/api_service";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {mockData} from "./mockData";

const fetchAuthorInfo = async () => {
    const name = "Lenko Ivanov";
    await getAuthorInformation(name);
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

function App() {
    const [firstName, setFirstName] = useState("");
    const firstNameInputRef = useRef<HTMLInputElement>(null);
    useLayoutEffect(() => {
        firstNameInputRef.current?.focus();
    }, []);
    return (
        <>
            <Header/>
            <Input
                label="First Name:"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                ref={firstNameInputRef}
            />
            <button style={{marginBottom: '4rem'}} onClick={fetchAuthorInfo}>Fetch</button>
            <div style={{marginBottom: '.5rem'}}>Chart with example data</div>
            <BarChart data={data}/>
            <LineChart
                title="Example chart"
                width={400}
                height={400}
                data={mockData}
                margin={{top: 30, right: 20, bottom: 5, left: -20}}
            >
                <Line type="linear" dataKey="citesPerYear" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        </>
    );
}

export default App;
