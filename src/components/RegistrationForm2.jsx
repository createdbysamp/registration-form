import { useState } from "react";

function RegistrationForm2() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Submitted Username: ${formData.username} \nSubmitted Email: ${formData.email}`
    );

    setFormData({
      username: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      <div>
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
      <button type="submit">Register</button>
      <p>Current Username: {formData.username}</p>
      <p>Current Email: {formData.email}</p>
    </form>
  );
}

export default RegistrationForm2;
