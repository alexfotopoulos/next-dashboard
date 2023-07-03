import styles from "./Conversation.module.scss";

export default function Conversation({ initial, name, text }) {
    return (
        <article className={styles.conversation}>
            <div className={styles.conversationSection1}>
                <div className={styles.imageContainer}>{initial}</div>
                <div>
                    <div className={styles.conversationName}>{name}</div>
                    <div>{text}</div>
                </div>
            </div>
            <div className={styles.replyButton}>REPLY</div>
        </article>
    );
}
