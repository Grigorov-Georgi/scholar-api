import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { AuthorDataType, getAuthorInformation } from "./http/api_service";
import Profile from "./components/Profile/Profile";

// const data = {
//   cites_per_year: {
//     "2013": 1,
//     "2014": 6,
//     "2015": 1,
//     "2016": 7,
//     "2017": 8,
//     "2018": 15,
//     "2019": 6,
//     "2020": 20,
//     "2021": 14,
//     "2022": 11,
//     "2023": 9,
//   },
// };

function App() {
  const [authorName, setAuthorName] = useState("");
  const [authorInformation, setAuthorInformation] =
    useState<AuthorDataType | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const fetchAuthorInfo = async () => {
    await getAuthorInformation(authorName)
      .then((response) => {
        console.log(response);
        setAuthorInformation(response);
      })
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
        <Profile data={authorInformation} />
      )}
    </>
  );
}

export default App;
