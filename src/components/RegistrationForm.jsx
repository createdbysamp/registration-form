import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Submitted Username: ${username} \nSubmitted Email: ${email}`);

    setUsername("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <button type="submit">Register</button>
      <p>Current Username: {username}</p>
      <p>Current Email: {email}</p>
    </form>
  );
}

export default RegistrationForm;
