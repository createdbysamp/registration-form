import { useState } from "react";
import FormValidation from "./FormValidation";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [funFact, setFunFact] = useState("");
  const [favoriteLanguage, setFavoriteLanguage] = useState("None");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [funFactError, setFunFactError] = useState("");
  const [favoriteLanguageError, setFavoriteLanguageError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleBlur = () => {
    const { validateForm } = FormValidation({
      username,
      email,
      funFact,
      favoriteLanguage,
      agreedToTerms,
      setUsernameError,
      setEmailError,
      setFunFactError,
      setFavoriteLanguageError,
      setTermsError,
    });
    validateForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();

    // setUsernameError("");
    // setEmailError("");
    // setFunFactError("");
    // setFavoriteLanguageError("");
    // setTermsError("");

    // let isValid = true;

    // if (username.trim() === "") {
    //   setUsernameError("Username is required.");
    //   isValid = false;
    // }
    // if (email.trim() === "") {
    //   setEmailError("Email is req.");
    //   isValid = false;
    // }
    // if (username.trim() !== "" && username.length < 3) {
    //   setUsernameError("Username must be at least 3 characters...");
    //   isValid = false;
    // }

    // if (username.trim() !== "" && !email.includes("@")) {
    //   setEmailError("Please enter a valid email address.");
    //   isValid = false;
    // }

    // if (agreedToTerms === false) {
    //   setTermsError("You must agree to the terms and conditions.");
    //   isValid = false;
    // }

    // if (funFact.trim() === "") {
    //   setFunFactError("Please give us a fun fact! We demand it.");
    //   isValid = false;
    // }

    // if (favoriteLanguage === "None") {
    //   setFavoriteLanguageError("Pick a fav language, or else.");
    //   isValid = false;
    // }

    // if (isValid === false) {
    //   return;
    // }

    alert(
      `Submitted Username: ${username} \nSubmitted Email: ${email} \nCreated Fun Fact: ${funFact} \nSelected Fav Language: ${favoriteLanguage} \nAgreed to Terms: ${
        agreedToTerms ? "Yes" : "No"
      }`
    );

    setUsername("");
    setEmail("");
    setFunFact("");
    setFavoriteLanguage("None");
    setAgreedToTerms(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="username">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            onBlur={handleBlur}
          />
        </label>
        {usernameError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{usernameError}</p>
        )}
      </div>
      <div id="email">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur}
          />
        </label>
        {emailError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{emailError}</p>
        )}
      </div>
      <div id="fun-fact">
        <label>
          Fun Fact About You:
          <textarea
            value={funFact}
            onChange={(e) => setFunFact(e.target.value)}
            onBlur={handleBlur}
          />
        </label>
        {funFactError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{funFactError}</p>
        )}
      </div>
      <div id="favorite-language">
        <label>
          Favorite Language:
          <select
            value={favoriteLanguage}
            onChange={(e) => setFavoriteLanguage(e.target.value)}
            onBlur={handleBlur}
          >
            <option value="None">Please select a language</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="SQL">SQL</option>
            <option value="JavaScript">JavaScript</option>
            <option value="C#">C#</option>
            <option value="Python">Python</option>
          </select>
        </label>
        {favoriteLanguageError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>
            {favoriteLanguageError}
          </p>
        )}
      </div>
      <div id="agreed-to-terms">
        <label>
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            onBlur={handleBlur}
          />
          I agree to the terms and conditions
        </label>
        {termsError && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{termsError}</p>
        )}
      </div>
      <button type="submit">Register</button>
      <p>Current Username: {username}</p>
      <p>Current Email: {email}</p>
      <p>Current Fun Fact: {funFact}</p>
      <p>Current Favorite Language: {favoriteLanguage}</p>
      <p>Agreed to Terms: {agreedToTerms ? "Yes" : "No"}</p>
    </form>
  );
}

export default RegistrationForm;
