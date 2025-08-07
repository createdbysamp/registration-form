import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [funFact, setFunFact] = useState("");
  const [favoriteLanguage, setFavoriteLanguage] = useState("None");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Submitted Username: ${username} \nSubmitted Email: ${email} \nCreated Fun Fact: ${funFact} \nSelected Fav Language: ${favoriteLanguage} \nAgreed to Terms: ${
        agreedToTerms ? "Yes" : "No"
      }`
    );

    setUsername("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="username">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div id="email">
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div id="fun-fact">
        <label>
          Fun Fact About You:
          <textarea
            value={funFact}
            onChange={(e) => setFunFact(e.target.value)}
          />
        </label>
      </div>
      <div id="favorite-language">
        <label>
          Favorite Language:
          <select
            value={favoriteLanguage}
            onChange={(e) => setFavoriteLanguage(e.target.value)}
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
      </div>
      <div id="agreed-to-terms">
        <label>
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
          />
          I agree to the terms and conditions
        </label>
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
