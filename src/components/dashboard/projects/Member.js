import styles from "./Member.module.scss";

export default function Member({ initial, color }) {
    return (
        <div className={styles.Member} style={{ backgroundColor: color }}>
            <div style={{ color: "white" }}>{initial}</div>
        </div>
    );
}
