import "./App.css";
import {useState} from "react";
import {getAuthorInformation} from "./http/api_service";
import LineChart from "./components/Charts/LineChart";

// const data = {
//     "cites_per_year": {
//         "2013": 1,
//         "2014": 6,
//         "2015": 1,
//         "2016": 7,
//         "2017": 8,
//         "2018": 15,
//         "2019": 6,
//         "2020": 20,
//         "2021": 14,
//         "2022": 11,
//         "2023": 9
//     }
// };

function App() {
    // const [data, setData] = useState<any>([]);
    const fetchAuthorInfo = async () => {
        const name = "Milena Krumova";
        await getAuthorInformation(name);
        // setData(data);
    };

    return (
        <>
            <div>Scholar API</div>
            <button onClick={fetchAuthorInfo}>Fetch</button>
            {/*<LineChart data={data}/>*/}
            <LineChart/>
        </>
    );
}

export default App;
