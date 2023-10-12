import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { getAuthorInformation } from "./http/api_service";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { mockData } from "./mockData";

const fetchAuthorInfo = async () => {
  const name = "Lenko Ivanov";
  await getAuthorInformation(name);
};

function App() {
  const [firstName, setFirstName] = useState("");
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    firstNameInputRef.current?.focus();
  }, []);
  return (
    <>
      <Header />
      <Input
        label="First Name:"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        ref={firstNameInputRef}
      />
      <button style={{marginBottom: '4rem'}} onClick={fetchAuthorInfo}>Fetch</button>
      <div style={{marginBottom: '.5rem'}}>Chart with example data</div>
      <LineChart
        title="Example chart"
        width={400}
        height={400}
        data={mockData}
        margin={{ top: 30, right: 20, bottom: 5, left: -20 }}
      >
        <Line type="linear" dataKey="citesPerYear" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
}

export default App;
