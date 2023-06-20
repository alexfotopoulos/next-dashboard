"use client";

import styles from "./Sidebar.module.scss";
import SidebarListItem from "./SidebarListItem";
import { useContext, useState, useEffect } from "react";
import SidebarContext from "../../../store/sidebarContext";

export default function Sidebar() {
    //consume sidebar toggle context
    const sidebarCtx = useContext(SidebarContext);

    //initialize state to determine if sidebar can be toggled
    const [sidebarToggle, setSidebarToggle] = useState();

    //determine if sidebar should be toggle-able when page is loaded
    useEffect(() => {
        //if page is less than 1200px wide, make sidebar toggleable
        if (window.innerWidth < 1200) {
            setSidebarToggle(true);
            //else, sidebar is not toggleable
        } else {
            setSidebarToggle(false);
            sidebarCtx.sidebarToggleDisable();
        }
    }, []);
    //change sidebar class as user changes width of screen
    useEffect(() => {
        function handleResize() {
            //if page is less than 1200px wide, make sidebar toggleable
            if (window.innerWidth < 1200) {
                setSidebarToggle(true);
                //else, sidebar is not toggleable
            } else {
                setSidebarToggle(false);
                sidebarCtx.sidebarToggleDisable();
            }
        }
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <nav
            className={
                sidebarToggle
                    ? sidebarCtx.showSidebar
                        ? styles.Sidebar__show
                        : styles.Sidebar__hide
                    : styles.Sidebar
            }
        >
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
                    <SidebarListItem
                        title="Billing"
                        icon="bank-card-fill.svg"
                    />
                    <SidebarListItem title="Profile" icon="user-fill.svg" />
                </ul>
            </section>
        </nav>
    );
}
