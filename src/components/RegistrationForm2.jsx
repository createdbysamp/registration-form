import { useState } from "react";

function RegistrationForm2() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    funFact: "",
    favoriteLanguage: "None",
    agreedToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: event.target.type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Submitted Username: ${formData.username} \nSubmitted Email: ${
        formData.email
      } \nCreated Fun Fact: ${formData.funFact} \nSelected Fav Language: ${
        formData.favoriteLanguage
      } \nAgreed to Terms: ${formData.agreedToTerms ? "Yes" : "No"}`
    );

    setFormData({
      username: "",
      email: "",
      funFact: "",
      favoriteLanguage: "(None)",
      agreedToTerms: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="username" className="mb-3">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div id="email" className="mb-2">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div id="fun-fact">
        <label>
          Fun Fact About You:
          <textarea
            value={formData.funFact}
            name="funFact"
            onChange={handleChange}
          />
        </label>
      </div>
      <div id="favorite-language">
        <label>
          Favorite Language:
          <select
            value={formData.favoriteLanguage}
            name="favoriteLanguage"
            onChange={handleChange}
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
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button className="mb-2" type="submit">
        Register
      </button>
      <p>Current Username: {formData.username}</p>
      <p>Current Email: {formData.email}</p>
      <p>Current Fun Fact: {formData.funFact}</p>
      <p>Current Favorite Language: {formData.favoriteLanguage}</p>
      <p>Agreed to Terms: {formData.agreedToTerms ? "Yes" : "No"}</p>
    </form>
  );
}

export default RegistrationForm2;
