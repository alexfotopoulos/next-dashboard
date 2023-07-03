"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import { useState } from "react";
import Project from "@/components/profile/Project";
import Setting from "@/components/profile/Setting";
import Conversation from "@/components/profile/Conversation";
import { projects } from "../../../helpers/dummyData/profilePage/projects";
import { conversations } from "../../../helpers/dummyData/profilePage/conversations";
import {
    accountSettings,
    applicationSettings,
} from "../../../helpers/dummyData/profilePage/settings";

export default function Profile() {
    //state to track which header button is selected
    const [selectedHeaderButton, setSelectedHeaderButton] = useState("App");

    //function to handle changing selected header button
    function selectHeaderButtonHandler(headerText) {
        setSelectedHeaderButton(headerText);
    }

    return (
        <div className={styles.page}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.Profile}>
                <header className={styles.ProfileHeader}>
                    <div className={styles.ProfileHeaderName}>
                        <div className={styles.initialContainer}>
                            <div>R</div>
                        </div>
                        <div>
                            <div className={styles.name}>Richard Davis</div>
                            <div>CEO / Co-Founder</div>
                        </div>
                    </div>
                    <div className={styles.HeaderButtonGroup}>
                        <div
                            className={styles.HeaderButton}
                            style={
                                selectedHeaderButton === "App"
                                    ? { backgroundColor: "white" }
                                    : {}
                            }
                            onClick={() => selectHeaderButtonHandler("App")}
                        >
                            <Image
                                src="/icons/profile/header/home-6-fill.svg"
                                width={18}
                                height={18}
                                style={{ marginRight: ".5rem" }}
                                alt="home icon"
                            />
                            <div>App</div>
                        </div>
                        <div
                            className={styles.HeaderButton}
                            style={
                                selectedHeaderButton === "Message"
                                    ? { backgroundColor: "white" }
                                    : {}
                            }
                            onClick={() => selectHeaderButtonHandler("Message")}
                        >
                            <Image
                                src="/icons/profile/header/mail-fill.svg"
                                width={18}
                                height={18}
                                style={{ marginRight: ".5rem" }}
                                alt="mail icon"
                            />
                            <div>Message</div>
                        </div>
                        <div
                            className={styles.HeaderButton}
                            style={
                                selectedHeaderButton === "Settings"
                                    ? { backgroundColor: "white" }
                                    : {}
                            }
                            onClick={() =>
                                selectHeaderButtonHandler("Settings")
                            }
                        >
                            <Image
                                src="/icons/profile/header/settings-3-fill.svg"
                                width={18}
                                height={18}
                                style={{ marginRight: ".5rem" }}
                                alt="settings icon"
                            />
                            <div>Settings</div>
                        </div>
                    </div>
                </header>
                <div className={styles.profileMain}>
                    <div className={styles.platformSettings}>
                        <div>
                            <header className={styles.platformSettingsHeader}>
                                Platform Settings
                            </header>
                            <div className={styles.settingsSubSection}>
                                <div
                                    className={styles.platformSettingsSubHeader}
                                >
                                    ACCOUNT
                                </div>
                                {accountSettings.map((a) => (
                                    <Setting key={a} text={a} />
                                ))}
                            </div>
                        </div>
                        <div className={styles.settingsSubSection}>
                            <header
                                className={styles.platformSettingsSubHeader}
                            >
                                APPLICATION
                            </header>
                            {applicationSettings.map((a) => (
                                <Setting key={a} text={a} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.profileInformation}>
                        <header className={styles.profileInformationHeader}>
                            <div>Profile Information</div>
                            <Image
                                src="/icons/billing/buttons/pencil-fill.svg"
                                width={15}
                                height={15}
                                style={{ cursor: "pointer" }}
                                alt="edit icon"
                            />
                        </header>
                        <p className={styles.profileInformationSummary}>
                            Hi, I’m Alec Thompson, Decisions: If you can’t
                            decide, the answer is no. If two equally difficult
                            paths, choose the one more painful in the short term
                            (pain avoidance is creating an illusion of
                            equality).
                        </p>
                        <div>
                            <div className={styles.infoGroup}>
                                <div className={styles.infoField}>
                                    Full Name:
                                </div>
                                <div>Alex M. Thompson</div>
                            </div>
                            <div className={styles.infoGroup}>
                                <div className={styles.infoField}>Mobile:</div>
                                <div>(1) 123 1234 123</div>
                            </div>
                            <div className={styles.infoGroup}>
                                <div className={styles.infoField}>Email:</div>
                                <div>alecthompson@gmail.com</div>
                            </div>
                            <div className={styles.infoGroup}>
                                <div className={styles.infoField}>Location</div>
                                <div>USA</div>
                            </div>
                            <div className={styles.infoGroup}>
                                <div className={styles.infoField}>Social</div>
                                <Image
                                    src="/icons/profile/profileInfo/facebook-box-fill.svg"
                                    width={20}
                                    height={20}
                                    style={{ marginRight: "1rem" }}
                                    alt="facebook icon"
                                />
                                <Image
                                    src="/icons/profile/profileInfo/twitter-fill.svg"
                                    width={20}
                                    height={20}
                                    style={{ marginRight: "1rem" }}
                                    alt="twitter icon"
                                />
                                <Image
                                    src="/icons/profile/profileInfo/instagram-line.svg"
                                    width={20}
                                    height={20}
                                    alt="instagram icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.conversations}>
                        <header className={styles.conversationsHeader}>
                            Conversations
                        </header>
                        {conversations.map((c) => (
                            <Conversation
                                key={c.name}
                                initial={c.initial}
                                name={c.name}
                                text={c.text}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <header className={styles.projectsHeader}>Projects</header>
                    <div className={styles.projectsContainer}>
                        {projects.map((p) => (
                            <Project
                                key={p.headerText}
                                image={p.image}
                                headerText={p.headerText}
                                title={p.title}
                                text={p.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
