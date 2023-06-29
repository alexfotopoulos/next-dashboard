import styles from "./Setting.module.scss";
import Switch from "@mui/material/switch";

export default function Setting({ text }) {
    return (
        <div className={styles.inputGroup}>
            <Switch />
            <span>{text}</span>
        </div>
    );
}
