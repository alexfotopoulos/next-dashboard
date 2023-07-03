import styles from "./BillingTile.module.scss";
import Image from "next/image";

export default function BillingTile({ icon, title, blurb, amount }) {
    return (
        <article className={styles.billingTile}>
            <div className={styles.iconContainer}>
                <Image
                    src={`/icons/billing/tiles/${icon}`}
                    width={25}
                    height={25}
                    alt="icon"
                />
            </div>
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.blurb}>{blurb}</div>
            </div>
            <div className={styles.amount}>{amount}</div>
        </article>
    );
}
