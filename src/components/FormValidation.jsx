function FormValidation({
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
}) {
  const validateForm = () => {
    setUsernameError("");
    setEmailError("");
    setFunFactError("");
    setFavoriteLanguageError("");
    setTermsError("");

    let isValid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required.");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is req.");
      isValid = false;
    }
    if (username.trim() !== "" && username.length < 3) {
      setUsernameError("Username must be at least 3 characters...");
      isValid = false;
    }

    if (username.trim() !== "" && !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (agreedToTerms === false) {
      setTermsError("You must agree to the terms and conditions.");
      isValid = false;
    }

    if (funFact.trim() === "") {
      setFunFactError("Please give us a fun fact! We demand it.");
      isValid = false;
    }

    if (favoriteLanguage === "None") {
      setFavoriteLanguageError("Pick a fav language, or else.");
      isValid = false;
    }

    if (isValid === false) {
      return;
    }
    return true;
  };
  return { validateForm };
}

export default FormValidation;
