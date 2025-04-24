// Global Styles
import "./globals.css";

// Lib Icons (react-icons)
import { FaGithub } from "react-icons/fa";
import { IoMoonOutline, IoSunny } from "react-icons/io5";

// Components
import { InputSearchProfile } from "./components/InputSearchProfile";
import { ProfileNotFound } from "./components/ProfileNotFound";
import { GithubProfile } from "./components/GithubProfile";
import { Loading } from "./components/Loading";

// Hooks
import { useState } from "react";

function App() {
  const [inputTextNameOfUser, setInputTextNameOfUser] = useState("");

  const [userProfileGithub, setUserProfileGithub] = useState({});

  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [repositories, setRepositories] = useState([]);

  if (darkMode) {
    const root = document.querySelector("#root");
    root.style.backgroundColor = "#000";
    return (
      <>
        <div className="boxMode">
          <div className="lightBtn" onClick={() => {
            setDarkMode(false);
          }}>
            <IoSunny color="#fff" size="2rem" />
          </div>
          <span className="line"></span>
          <div className="darkBtn">
            <IoMoonOutline color="#fff" size="2rem" />
          </div>
        </div>

        <header className="darkHeader">
          <FaGithub color="#fff"
            size="4.5rem" />
          <span>Perfil</span>
          <span>Github</span>
        </header>

        <main>
          <InputSearchProfile
            placeHolder="Digite um usuário do Github"
            stateInput={inputTextNameOfUser}
            setStateInput={setInputTextNameOfUser}
            setUserProfileGithub={setUserProfileGithub}
            setStateLoading={setIsLoading}
            setRepositories={setRepositories}
          />

          {isLoading ? <Loading darkMode={darkMode} /> : ""}

          {userProfileGithub.id !== undefined ?
            < GithubProfile
              avatar_url={userProfileGithub.avatar_url}
              name={userProfileGithub.name}
              bio={userProfileGithub.bio}
              html_url={userProfileGithub.html_url}
              followers={userProfileGithub.followers}
              following={userProfileGithub.following}
              public_repos={userProfileGithub.public_repos}
              repos_url={userProfileGithub.repos_url}
              repositories={repositories}
            />
            : userProfileGithub.status == "404" ? <ProfileNotFound /> : ""}

        </main>
      </>
    );
  }
  else {
    const root = document.querySelector("#root");
    root.style.backgroundColor = "#f9f9f9";
    return (
      <>
        <div className="boxModeOnLightMode">
          <div className="lightBtnOnLightMode" >
            <IoSunny color="#000" size="2rem" />
          </div>
          <span className="lineOnLightMode"></span>
          <div className="darkBtnOnLightMode" onClick={() => {
            setDarkMode(true);
          }}>
            <IoMoonOutline color="#000" size="2rem" />
          </div>
        </div>
        <header className={"header"}>
          <FaGithub color={"#000"}
            size={"4.5rem"} />
          <span>Perfil</span>
          <span>Github</span>
        </header>

        <main>
          <InputSearchProfile
            placeHolder="Digite um usuário do Github"
            stateInput={inputTextNameOfUser}
            setStateInput={setInputTextNameOfUser}
            setUserProfileGithub={setUserProfileGithub}
            setStateLoading={setIsLoading}
            setRepositories={setRepositories}
          />

          {isLoading ? <Loading darkMode={darkMode} /> : ""}

          {userProfileGithub.id !== undefined ?
            < GithubProfile
              avatar_url={userProfileGithub.avatar_url}
              name={userProfileGithub.name}
              bio={userProfileGithub.bio}
              html_url={userProfileGithub.html_url}
              followers={userProfileGithub.followers}
              following={userProfileGithub.following}
              public_repos={userProfileGithub.public_repos}
              repos_url={userProfileGithub.repos_url}
              repositories={repositories}
            />
            : userProfileGithub.status == "404" ? <ProfileNotFound /> : ""}

        </main>
      </>
    );
  }
}

export default App;