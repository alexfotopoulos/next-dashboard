import styles from "./Sidebar.module.scss";
import SidebarListItem from "./SidebarListItem";

export default function Sidebar() {
    return (
        <nav className={styles.Sidebar}>
            <header className={styles.SidebarHeaderSection}>
                <div className={styles.SidebarHeader}>Material Dashboard</div>
            </header>
            <section className={styles.SidebarListSection}>
                <ul className={styles.SidebarList}>
                    <SidebarListItem
                        title="Dashboard"
                        icon="dashboard-fill.svg"
                    />
                    <SidebarListItem title="Tables" icon="table-fill.svg" />
                    <SidebarListItem title="Billing" icon="bank-card-fill.svg" />
                    <SidebarListItem title="Profile" icon="user-fill.svg" />
                </ul>
            </section>
        </nav>
    );
}
