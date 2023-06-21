"use client";

import styles from "./SidebarListItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarListItem({ title, icon, onClick }) {
    //get pathname to determine which SidebarListItem should be highlighted
    const pathname = usePathname();
    const path = pathname.slice(1);
    return (
        <li>
            <Link
                href={`/${title.toLowerCase()}`}
                className={
                    path === title.toLowerCase()
                        ? styles.SidebarListItemHL
                        : styles.SidebarListItem
                }
                onClick={onClick}
            >
                <Image
                    src={`/icons/sidebar/${icon}`}
                    width={20}
                    height={20}
                    alt={`icon - ${icon}`}
                />
                <p className={styles.SidebarListItemTitle}>{title}</p>
            </Link>
        </li>
    );
}
