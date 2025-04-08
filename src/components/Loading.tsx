import styles from "./Loading.module.css";

export function Loading({ darkMode }) {
    return (
        <>
            <p className={darkMode ? styles.loadingMessage : styles.loadingMessageLightMode}>Carregando ...</p>
        </>
    );
}