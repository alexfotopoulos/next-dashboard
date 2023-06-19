import styles from "./SidebarListItem.module.scss";
import Image from "next/image";

export default function SidebarListItem({ title, icon }) {
    return (
        <li className={styles.SidebarListItem}>
            <Image src={`/icons/sidebar/${icon}`} width={20} height={20} alt={`icon - ${icon}`}/>
            <p className={styles.SidebarListItemTitle}>{title}</p>
        </li>
    );
}