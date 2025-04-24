import styles from "./CardGithubComplete.module.css";

import { AiFillCloseSquare } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { SiTrailforks } from "react-icons/si";
import { RiStarSLine } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { PiGlobeLight } from "react-icons/pi";

import { useEffect, useState } from "react";

export function CardGitbhubComplete({ setLearnMoreCardState, name, bio, avatar_url, html_url, followers, following, public_repos, repos_url, repositories }) {
    const [inputSearchRepostirie, setInputSearchRepositorie] = useState('');
    const [repositoriesFiltered, setRepositoriesFiltered] = useState([...repositories]);

    function filterRepositoriesByName(inputNameRepository: string) {
        const inputNameRepositoryLowerCase = inputNameRepository.toLocaleLowerCase();
        const result = repositories.filter(repository => {
            return repository.name.toLowerCase().includes(inputNameRepositoryLowerCase);
        });

        setRepositoriesFiltered(result);
    }

    useEffect(() => {
        setRepositoriesFiltered(repositories);
        console.log("tes");
    }, [repositories]);

    return (
        <div className={styles.container}>
            <div className={styles.closeCard} onClick={() => {
                setLearnMoreCardState(false);
            }}>
                <AiFillCloseSquare
                    size={'2.5rem'}
                    style={{ backgroundColor: 'white', color: 'red', borderRadius: '5px' }}
                />
            </div>
            <div className={styles.subContainer}>
                <div className={styles.wrapperImg}>
                    <img src={avatar_url} />
                </div>
                <div className={styles.containerMainContent}>
                    <div>
                        <h1>{name ? name : "Sem nome"}</h1>
                        <h2>{bio}</h2>
                    </div>

                    <div className={styles.wrapperPerfilInfos}>
                        <div className={styles.wrapperInfo}>
                            <p title="Seguidores">
                                <GoPeople title="Seguidores" /> <span>{followers}</span> followers
                            </p>
                            <p>
                                <span>{following}</span> following
                            </p>
                            <p>
                                <RiGitRepositoryLine
                                    title="Repositorios"
                                /> <span>{public_repos}</span> Repositories
                            </p>
                        </div>
                        <div>
                            <a href={html_url}
                                target="_blank"
                                title="Perfil no Github"
                                className={styles.goToIcon}
                            >
                                <IoLogOutOutline size={"3rem"} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.infContainer}>
                <div>
                    <h2>Procure por um Repositório</h2>
                    <input type="text"
                        placeholder="Digite o nome do repositório"
                        value={inputSearchRepostirie}
                        onChange={e => {
                            const inputValue = e.currentTarget.value;
                            setInputSearchRepositorie(inputValue);
                            filterRepositoriesByName(inputValue);
                        }}
                    />
                </div>

                <div className={styles.containerRepositories}>
                    {repositoriesFiltered.map(objRepositorie => {
                        return (
                            <div key={objRepositorie.id}>
                                <span className={styles.wrapperTexts}>
                                    <h2>{objRepositorie.name}</h2>
                                    <p>{objRepositorie.description}</p>
                                </span>
                                <span className={styles.wrapperIcons}>
                                    <p><SiTrailforks size={"1.1rem"} /> {objRepositorie.forks} |</p>
                                    <p><RiStarSLine size={"1.1rem"} /> {objRepositorie.stargazers_count}</p>
                                </span>
                                <span className={styles.wrapperSocial}>
                                    <p>
                                        <a href={objRepositorie.html_url ? objRepositorie.html_url : "#"}
                                            target="_blank">
                                            <FaGithubSquare size={"2.5rem"} />
                                            {objRepositorie.html_url ? "Repositório do Projeto" : "Não possui"}</a></p>
                                    <p>
                                        <a href={objRepositorie.homepage ? objRepositorie.homepage : "#"}
                                            target="_blank">
                                            <PiGlobeLight size={"2.5rem"} />
                                            {objRepositorie.homepage ? "Projeto Online" : "Não possui"}</a>
                                    </p>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}