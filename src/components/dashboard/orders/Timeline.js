import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";
import { ordersOverview } from "../../../../helpers/dummyData/dashboardPage/ordersOverview";

export default function Timeline() {
    return (
        <article className={styles.Timeline}>
            <div className={styles.TimelineItemGroup}>
                {ordersOverview.map((o) => (
                    <TimelineItem
                        key={o.info}
                        icon={o.icon}
                        info={o.info}
                        dateTime={o.dateTime}
                    />
                ))}
            </div>
        </article>
    );
}
