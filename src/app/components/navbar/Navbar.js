import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <header className={styles.NavbarHeaderSection}>
                <div className={styles.NavbarHeader}>Matieral Dashboard</div>
            </header>
            <section className={styles.NavbarListSection}>
                <ul className={styles.NavbarList}>
                    <li className={styles.NavbarListItem}>Dashboard</li>
                    <li className={styles.NavbarListItem}>Tables</li>
                    <li className={styles.NavbarListItem}>Billing</li>
                    <li className={styles.NavbarListItem}>Profile</li>
                </ul>
            </section>
        </nav>
    );
}
