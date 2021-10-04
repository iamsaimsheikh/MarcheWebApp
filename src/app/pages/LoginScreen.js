import React, { useState } from "react";
import Login from "../components/login";
import SignUpScreen from "../components/signup";
import EmailSignUp from "../components/Emailsignup";
import Emailsignup from "../components/Emailsignup";
import IdeaHolderHomeScreen from "./IdeaHolderHomeScreen";
import UserInformation from "../components/UserInformation";
import SocialAccountsInfo from "../components/SocialAccountsInfo";

function LoginScreen() {
  const [screen, setScreen] = useState("login");
  const [progress, setProgress] = useState(25);
  const [profilePicture, setProfilePicture] = useState(null);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regHandler = () => {
    fetch("https://marcheserver.herokuapp.com/api/v1/users/reg", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${fName} ${lName}`,
        email: email,
        password: password,
        joined: new Date(),
      }),
    })
      .then(() => {
        setScreenState("userinfo");
        setProgress(50);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const setScreenState = (state) => {
    setScreen(state);
  };

  if (screen === "login") {
    return (
      <div className="loginDivScreen">
        <Login setScreenState={setScreenState} />
      </div>
    );
  } else if (screen === "signup") {
    return (
      <div className="loginDivScreen">
        <SignUpScreen
          email={email}
          setEmail={setEmail}
          setScreenState={setScreenState}
        />
      </div>
    );
  } else if (screen === "email") {
    return (
      <div className="loginDivScreen">
        <Emailsignup
          email={email}
          fName={fName}
          setFName={setFName}
          lName={lName}
          setLName={setLName}
          password={password}
          setPassword={setPassword}
          setScreenState={setScreenState}
          progress={progress}
          setProgress={setProgress}
          regHandler={regHandler}
        />
      </div>
    );
  } else if (screen === "dashboard") {
    return <IdeaHolderHomeScreen profilePicture={profilePicture} />;
  } else if (screen === "userinfo") {
    return (
      <div className="loginDivScreen">
        <UserInformation
          setScreenState={setScreenState}
          progress={progress}
          setProgress={setProgress}
          profilePictureProp={setProfilePicture}
        />
      </div>
    );
  } else if (screen === "socialaccountsinfo") {
    return (
      <div className="loginDivScreen">
        <SocialAccountsInfo
          setScreenState={setScreenState}
          progress={progress}
          setProgress={setProgress}
        />
      </div>
    );
  }
}

export default LoginScreen;
