import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import { getAuthorInformation } from "./http/api_service";

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
      <Input />
      <button onClick={fetchAuthorInfo}>Fetch</button>
    </>
  );
}

export default App;
