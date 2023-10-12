import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { AuthorDataType, getAuthorInformation } from "./http/api_service";
import Avatar from "./components/Profile/Avatar/Avatar";
import { LineChartContainer } from "./components/LineChartContainer/LineChartContainer";

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
      {!showInfo ? (
        <>
          <Header />
          <Input
            label="Author Name:"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            ref={firstNameInputRef}
          />
          <button style={{ marginBottom: "4rem" }} onClick={fetchAuthorInfo}>
            Fetch
          </button>
        </>
      ) : (
        <>
          <LineChartContainer
            citesPerYear={authorInformation?.citesPerYear ?? {}}
          />
          <Avatar photoUrl={authorInformation?.urlPicture} />
        </>
      )}
    </>
  );
}

export default App;
