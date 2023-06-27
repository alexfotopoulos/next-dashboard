import styles from "./BtnOutline.module.scss";

export default function BtnOutline({ title }) {
    return <div className={styles.BtnOutline}>{title || "test"}</div>;
}
