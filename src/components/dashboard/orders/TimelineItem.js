import styles from "./TimelineItem.module.scss";
import Image from "next/image";

export default function TimelineItem({ icon, info, dateTime }) {
    return (
        <article className={styles.TimelineItem}>
            <div className={styles.imageContainer}>
                <Image
                    src={`/icons/dashboard/orders/timeline/${icon}`}
                    width={14}
                    height={14}
                    alt="icon"
                />
            </div>
            <div>
                <div className={styles.info}>{info}</div>
                <div className={styles.dateTime}>{dateTime}</div>
            </div>
        </article>
    );
}
