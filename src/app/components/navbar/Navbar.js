import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link"

export default function navbar() {
    return (
        <nav className={styles.Navbar}>
            <section className={styles.NavbarSectionOne}>
                <div className={styles.NavbarPath}>
                    <Link href="/dashboard">
                    <Image
                        src="/icons/navbar/home-fill.svg"
                        width={16}
                        height={16}
                        alt="home icon"
                        style={{cursor: "pointer"}}
                    />
                    </Link>
                    <span>/</span>
                    <span>Dashboard</span>
                </div>
                <h1>Dashboard</h1>
            </section>
            <section className={styles.NavbarSectionTwo}>
                <div className={styles.NavbarSearchGroup}>
                    <input type="text" id="search" placeholder=" " />
                    <label htmlFor="search">Search here</label>
                </div>
                <Image
                    src="/icons/navbar/account-circle-fill.svg"
                    width={18}
                    height={18}
                    alt="account icon"
                    className={styles.NavbarSectionTwoIcon}
                />
                <Image
                    src="/icons/navbar/settings-4-fill.svg"
                    width={18}
                    height={18}
                    alt="settings icon"
                    className={styles.NavbarSectionTwoIcon}
                />
                <Image
                    src="/icons/navbar/notification-4-fill.svg"
                    width={18}
                    height={18}
                    alt="notification icon"
                    className={styles.NavbarSectionTwoIcon}
                />
                <button>LOG OUT</button>
            </section>
        </nav>
    );
}
