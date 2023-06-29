import styles from "./Transaction.module.scss";
import Image from "next/image";

export default function Transaction({ company, date, icon, amount }) {
    let color;
    if (icon === "arrow-down-s-line.svg") {
        color = "rgb(244, 67, 53)";
    } else if (icon === "arrow-up-s-line.svg") {
        color = "rgb(67, 160, 71)";
    } else {
        color = "rgb(25, 25, 25)";
    }
    return (
        <div className={styles.Transaction}>
            <div className={styles.section1}>
                <div
                    className={styles.imageContainer}
                    style={{ border: `1px solid ${color}` }}
                >
                    <Image
                        src={`/icons/billing/transactions/${icon}`}
                        width={20}
                        height={20}
                        alt="icon"
                    />
                </div>
                <div>
                    <div className={styles.company}>{company}</div>
                    <div>{date}</div>
                </div>
            </div>
            <div className={styles.amount} style={{ color: color }}>
                {amount}
            </div>
        </div>
    );
}
