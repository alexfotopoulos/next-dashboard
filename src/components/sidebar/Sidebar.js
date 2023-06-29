"use client";

import styles from "./Sidebar.module.scss";
import SidebarListItem from "./SidebarListItem";
import { useContext, useState, useEffect } from "react";
import SidebarContext from "../../../store/sidebarContext";
import Image from "next/image";

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
    }, [sidebarCtx]);
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

    //function to close sidebar
    function sidebarToggleHandler() {
        sidebarCtx.sidebarToggler((prev) => !prev);
    }

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
                {sidebarToggle ? (
                    <Image
                        className={styles.SidebarCloseIcon}
                        src="/icons/sidebar/close-fill.svg"
                        width={20}
                        height={20}
                        alt="close sidebar"
                        onClick={sidebarToggleHandler}
                    />
                ) : null}
                <div className={styles.SidebarHeader}>Material Dashboard</div>
            </header>
            <section className={styles.SidebarListSection}>
                <ul className={styles.SidebarList}>
                    <SidebarListItem
                        title="Dashboard"
                        icon="dashboard-fill.svg"
                        onClick={sidebarToggleHandler}
                    />
                    <SidebarListItem
                        title="Tables"
                        icon="table-fill.svg"
                        onClick={sidebarToggleHandler}
                    />
                    <SidebarListItem
                        title="Billing"
                        icon="bank-card-fill.svg"
                        onClick={sidebarToggleHandler}
                    />
                    <SidebarListItem
                        title="Profile"
                        icon="user-fill.svg"
                        onClick={sidebarToggleHandler}
                    />
                </ul>
            </section>
        </nav>
    );
}
