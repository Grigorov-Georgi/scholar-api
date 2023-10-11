import "./App.css";
import Header from "./components/Header/Header";
import { getAuthorInformation } from "./http/api_service";

const fetchAuthorInfo = async () => {
  const name = "Lenko Ivanov";
  await getAuthorInformation(name);
};

function App() {
  return (
    <>
      <Header />
      <button onClick={fetchAuthorInfo}>Fetch</button>
    </>
  );
}

export default App;
