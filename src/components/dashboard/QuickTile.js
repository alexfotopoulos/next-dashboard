import styles from "./QuickTile.module.scss";
import Image from "next/image";

export default function QuickTile({
    icon,
    title,
    data,
    percent,
    summaryText,
    shadowColor,
    bgColor,
}) {
    let style = {
        background: bgColor,
        boxShadow: `0px 6px 15px -8px ${shadowColor}`,
    };

    return (
        <article className={styles.QuickTile}>
            <div className={styles.QuickTileDetails}>
                <div className={styles.iconContainer} style={style}>
                    <Image
                        src={`/icons/dashboard/quicktiles/${icon}`}
                        alt={icon}
                        width={25}
                        height={25}
                    />
                </div>
                <div className={styles.detailsContainer}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.data}>{data}</span>
                </div>
            </div>
            <hr />
            <div className={styles.summary}>
            <span className={styles.summaryText}><span className={styles.percent}>{percent}</span> {summaryText}</span>
            </div>
        </article>
    );
}
