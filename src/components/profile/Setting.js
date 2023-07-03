import styles from "./Setting.module.scss";
import Switch from "@mui/material/Switch";

export default function Setting({ text }) {
    return (
        <article className={styles.inputGroup}>
            <Switch />
            <span>{text}</span>
        </article>
    );
}
