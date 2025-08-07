import { useState } from "react";
import viteLogo from "/vite.svg";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationForm2 from "./components/RegistrationForm2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="mb-1">Hello, let's get you registered!</h1>
      <RegistrationForm />
    </>
  );
}

export default App;
