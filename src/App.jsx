import { useState } from "react";
import viteLogo from "/vite.svg";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationForm2 from "./components/RegistrationForm2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <RegistrationForm2 />
    </>
  );
}

export default App;
