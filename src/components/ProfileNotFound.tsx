import styles from "./ProfileNotFound.module.css";

export function ProfileNotFound() {
    return (
        <div className={styles.cardMessage}>
            <p>
                Nenhum perfil foi encontrado com esse nome de usuário.
            </p>
            <p>Tente novamente</p>
        </div>
    );
}