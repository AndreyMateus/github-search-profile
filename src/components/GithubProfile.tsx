import styles from "./GithubProfile.module.css";

import { GoPeople } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";

import { CardGitbhubComplete } from "./CardGithubComplete";
import { useState, useEffect } from "react";

interface GithubProfileProps {
    name: string,
    bio: string,
    avatar_url: string,
    html_url: string,
    followers: number,
    following: number,
    public_repos: number,
    repos_url: string;
}

export function GithubProfile({ name, bio, avatar_url, html_url, followers, following, public_repos, repos_url, repositories }: GithubProfileProps) {
    const [learnMoreCardState, setLearnMoreCardState] = useState(false);

    return (
        <article className={styles.cardProfile}>
            <a href={html_url}
                target="_blank"
                title="Perfil no Github"
                className={styles.goToIcon}
            >
                <IoLogOutOutline size={"3rem"} />
            </a>
            <img src={avatar_url}
                className={styles.profileImg}
            />
            <div className={styles.wrapperTitles}>
                <div>
                    <h1>{name}</h1>
                    <p>{bio}</p>
                </div>

                <div className={styles.wrapperInfo}>
                    <p title="Seguidores">
                        <GoPeople title="Seguidores" /> <span>{followers}</span> followers |
                    </p>
                    <p>
                        <span>{following}</span> following |
                    </p>
                    <p>
                        <RiGitRepositoryLine
                            title="Repositorios"
                        /> <span>{public_repos}</span>
                    </p>
                </div>
                <div className={styles.wrapper}
                    onClick={() => {
                        setLearnMoreCardState(true);
                    }}
                >
                    <div>
                        <p>Saiba mais </p>
                        <FaInfoCircle size={"2rem"} style={{ color: "white" }} />
                    </div>
                </div>
            </div>

            {learnMoreCardState ?
                <CardGitbhubComplete
                    setLearnMoreCardState={setLearnMoreCardState}
                    name={name}
                    bio={bio}
                    avatar_url={avatar_url}
                    html_url={html_url}
                    followers={followers}
                    following={following}
                    public_repos={public_repos}
                    repos_url={repos_url}
                    repositories={repositories}
                /> : ""}
        </article>
    );
}