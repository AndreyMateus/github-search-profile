import styles from "./InputSearchProfile.module.css";

import { PiMagnifyingGlassLight } from "react-icons/pi";

import { useState } from "react";

interface GithubProfile {
    name: string,
    bio: string,
    avatar_url: string,
    html_url: string,
    followers: number,
    following: number,
    public_repos: number,
    repos_url: string;
}

interface InputSearchProfileProps {
    placeHolder: string;
    stateInput: string,
    setStateLoading: (isLoading: boolean) => void,
    setStateInput: (textOfInput: string) => void;
    setUserProfileGithub: (githubProfile: GithubProfile) => void;
    setRepositories: () => void;
}

function validationUserNameGithub(nameOfUser: string): string {
    // Validação básica de NOME de usuário.
    const regex = /\w|[-]/g;
    const validatedUsernameOfGithub = nameOfUser.match(regex) ?? [""];

    return validatedUsernameOfGithub?.join('');
}

export function InputSearchProfile({ stateInput, setStateInput, placeHolder, setUserProfileGithub, setStateLoading, setRepositories, ...props }: InputSearchProfileProps) {
    const [isValidContent, setIsValidContent] = useState(true);

    async function getUserProfileGithub(inputTextNameOfUser: string) {
        setStateLoading(true);

        // Validação básica antes do ENVIO (caso o REQUIRED seja removido via INSPETOR).
        if (inputTextNameOfUser.length < 1) {
            setStateLoading(false);
            setIsValidContent(false);
            return;
        }

        try {
            const response = await fetch(`https://api.github.com/users/${inputTextNameOfUser}`);

            // console.clear();

            const responseToJson = await response.json();

            if (responseToJson.id === undefined) {
                setStateLoading(false);
                setIsValidContent(false);
                setUserProfileGithub(responseToJson);
                return;
            }

            setStateLoading(false);
            setUserProfileGithub(responseToJson);
            setIsValidContent(true);

            const responseRepositories = await fetch(responseToJson.repos_url);
            const repositoriesUser = await responseRepositories.json();
            setRepositories(repositoriesUser);
        } catch (error) {
            console.warn("Um erro ocorreu ao busca seu usuário!");
        }
    }

    return (
        <form className={styles.wrapperInput}
            onSubmit={e => {
                e.preventDefault();
                getUserProfileGithub(stateInput);
                setStateInput("");
            }}
        >
            <input
                type="text"
                className={isValidContent ? styles.input : styles.invalidInput}
                required
                aria-label="campo de envio"
                aria-description="Lugar onde se envia o nome do usuário que você quer pesquisar no github."
                onInvalid={() => {
                    setIsValidContent(false);
                }}
                placeholder={placeHolder}
                value={stateInput}
                onChange={(e) => {
                    const valueOfInput = e.currentTarget.value;

                    const usernameValidated = validationUserNameGithub(valueOfInput);
                    setStateInput(usernameValidated);
                }}
                {...props}
            />
            <div className={styles.glass}
                onClick={e => {
                    e.preventDefault();
                    getUserProfileGithub(stateInput);
                    setStateInput("");
                }}
            >
                <PiMagnifyingGlassLight
                    color="#fff"
                    size={"2rem"}
                />
            </div>
        </form>
    );
}