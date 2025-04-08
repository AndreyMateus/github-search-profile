import { RiGitRepositoryLine } from "react-icons/ri";
import styles from "./GithubProfile.module.css";

import { GoPeople } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";

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

export function GithubProfile({ name, bio, avatar_url, html_url, followers, following, public_repos, repos_url }: GithubProfileProps) {
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
                    <p>
                        <GoPeople title="Seguindo" /> {following} |
                    </p>
                    <p title="Seguidores">
                        Followers: {followers} |
                    </p>
                    <p>
                        <RiGitRepositoryLine
                            title="Repositorios"
                        />{public_repos}
                    </p>
                    {/* <p>Repos Url {repos_url}</p> */}
                </div>

            </div>

        </article>
    );
}