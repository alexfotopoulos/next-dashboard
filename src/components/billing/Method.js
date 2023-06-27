import styles from "./Method.module.scss";
import Image from "next/image";

export default function Method({ icon, last4 }) {
    return (
        <div className={styles.method}>
            <div className={styles.infoContainer}>
                <Image
                    src={`/icons/billing/methods/${icon}`}
                    width={30}
                    height={30}
                    style={{ marginRight: "1rem" }}
                />
                <div>
                    <span className={styles.hiddenText}>****</span>
                    <span className={styles.hiddenText}>****</span>
                    <span className={styles.hiddenText}>****</span>
                    <span>{last4}</span>
                </div>
            </div>
            <Image
                src="/icons/billing/methods/pencil-fill.svg"
                width={20}
                height={20}
                style={{ marginRight: "1rem", cursor: "pointer" }}
            />
        </div>
    );
}
