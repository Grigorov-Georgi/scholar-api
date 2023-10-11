import "./App.css";
import { getAuthorInformation } from "./http/api_service";

const fetchAuthorInfo = async () => {
  const name = "Lenko Ivanov";
  await getAuthorInformation(name);
};

function App() {
  return (
    <>
      <div>Scholar API</div>
      <button onClick={fetchAuthorInfo}>Fetch</button>
    </>
  );
}

export default App;
