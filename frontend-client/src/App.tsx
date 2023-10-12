import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { AuthorDataType, getAuthorInformation } from "./http/api_service";
import Profile from "./components/Profile/Profile";

function App() {
  const [authorName, setAuthorName] = useState("");
  const [authorInformation, setAuthorInformation] =
    useState<AuthorDataType | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const fetchAuthorInfo = async () => {
    await getAuthorInformation(authorName)
      .then((response) => setAuthorInformation(response))
      .catch((err) => {
        console.log(err);
        //TODO: TOASTS
      });
  };

  useEffect(() => {
    if (authorInformation) setShowInfo(true);
  }, [authorInformation]);

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
      <button style={{ marginBottom: "4rem" }} onClick={fetchAuthorInfo}>
        Fetch
      </button>
      <div style={{ marginBottom: ".5rem" }}>Chart with example data</div>
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
      <Avatar photoUrl={authorInformation?.urlPicture} />
    </>
  );
}

export default App;
