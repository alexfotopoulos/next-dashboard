import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
    return (
        <div className={styles.Timeline}>
            <div className={styles.TimelineItemGroup}>
                <TimelineItem
                    icon="notification-3-fill.svg"
                    info="$2400 - Design Changes"
                    dateTime="22 DEC 7:20 PM"
                />
                <TimelineItem
                    icon="archive-fill.svg"
                    info="New order #1832412"
                    dateTime="21 DEC 11 PM"
                />
                <TimelineItem
                    icon="shopping-cart-2-fill.svg"
                    info="Server payments for April"
                    dateTime="21 DEC 9:34 PM"
                />
                <TimelineItem
                    icon="bank-card-2-fill.svg"
                    info="New card added for order #4395133"
                    dateTime="20 DEC 2:20 AM"
                />
                <TimelineItem
                    icon="key-fill.svg"
                    info="API key changed"
                    dateTime="18 Dec 4:54 AM"
                />
            </div>
        </div>
    );
}
