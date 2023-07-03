import styles from "./ProgressBar.module.scss";

export default function ProgressBar({ color, width }) {
    return (
        <article className={styles.ProgressBar}>
            <div
                className={styles.Progress}
                style={{ backgroundColor: color, width: width }}
            ></div>
        </article>
    );
}
