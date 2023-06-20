"use client";

import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import SidebarContext from "../../../store/sidebarContext";

export default function Navbar() {
    //get pathname from the url
    const pathName = usePathname();
    //remove leading "/" from pathname
    let path = pathName.slice(1);

    //consume sidebar toggle context
    const sidebarCtx = useContext(SidebarContext);
    //function to toggle whether sidebar should be shown via context
    function sidebarToggleHandler() {
        sidebarCtx.sidebarToggler((prev) => !prev);
    }

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
                            style={{ cursor: "pointer" }}
                        />
                    </Link>
                    <span>/</span>
                    <span>{path}</span>
                </div>
                <h1>{path}</h1>
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
                />
                {sidebarCtx.showSidebar ? (
                    <Image
                        src="/icons/navbar/menu/menu-line.svg"
                        width={18}
                        height={18}
                        alt="expand menu"
                        className={styles.NavbarSectionTwoMenuIcon}
                        onClick={sidebarToggleHandler}
                    />
                ) : (
                    <Image
                        src="/icons/navbar/menu/menu-fold-line.svg"
                        width={18}
                        height={18}
                        alt="expand menu"
                        className={styles.NavbarSectionTwoMenuIcon}
                        onClick={sidebarToggleHandler}
                    />
                )}
                <Image
                    src="/icons/navbar/settings-4-fill.svg"
                    width={18}
                    height={18}
                    alt="settings icon"
                />
                <Image
                    src="/icons/navbar/notification-4-fill.svg"
                    width={18}
                    height={18}
                    alt="notification icon"
                />
                <button>LOG OUT</button>
            </section>
        </nav>
    );
}
