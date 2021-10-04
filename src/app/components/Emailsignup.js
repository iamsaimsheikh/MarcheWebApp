import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import GLogo from "../assets/googleLogo.svg";
import ProgressBar from "./ProgressBar";

function Emailsignup({
  setScreenState,
  progress,
  setProgress,
  email,
  fName,
  setFName,
  lName,
  setLName,
  password,
  setPassword,
  regHandler,
}) {
  const [field, setfield] = useState(true);

  const activateField = () => {
    setfield(true);
  };

  const deactivateField = () => {
    setfield(false);
  };

  return (
    <div className="emailSignUpDiv loginDiv">
      <h1>Create Your Account</h1>
      <ProgressBar progress={progress} />
      <h3>{email}</h3>

      <div className="userInfoDiv">
        <label class="wrapper">
          <input
            onChange={(ev) => setFName(ev.target.value)}
            value={fName}
            type="text"
            class="textfield"
            name="name"
            placeholder=" "
          />
          <span class="placeholder">First Name</span>
        </label>
        <label class="wrapper">
          <input
            onChange={(ev) => setLName(ev.target.value)}
            value={lName}
            type="text"
            class="textfield"
            name="name"
            placeholder=" "
          />
          <span class="placeholder">Last Name</span>
        </label>
      </div>

      <div className="userInfoDivPassword">
        <label class="wrapper">
          <input
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
            type="password"
            class="textfield"
            name="name"
            placeholder=" "
          />
          <span class="placeholder">Password</span>
        </label>
      </div>

      <h3>I want to:</h3>

      <div className="btnDiv userInfoDiv">
        <button onClick={activateField}>Sell My Idea</button>
        <button onClick={deactivateField}>Invest In Idea</button>
      </div>

      {field ? (
        <div className="userInfoDivPassword">
          <label class="wrapper">
            <input type="text" class="textfield" name="name" placeholder=" " />
            <span class="placeholder">username</span>
          </label>
        </div>
      ) : null}

      <div className="agreement">
        <input type="checkbox" id="agreement" name="agreement" value="true" />
        <label for="agreement">
          Yes, I understand and agree to the Marché Terms of Service, including
          the User Agreement, Payment and Privacy Policy.
        </label>
        <br></br>
      </div>

      <div
        className="formButton"
        onClick={regHandler}
      >
        <p className="formButtonTxt">Next</p>
      </div>
    </div>
  );
}

export default Emailsignup;
