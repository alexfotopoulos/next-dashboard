import styles from "./TableHeader.module.scss";

export default function TableHeader({ title }) {
    return (
        <header className={styles.TableHeader}>
            <div>{title}</div>
        </header>
    );
}
