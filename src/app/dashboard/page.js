"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import QuickTile from "../../components/dashboard/quicktiles/QuickTile";
import BarChart from "@/components/dashboard/charts/BarChart";
import LineChart from "@/components/dashboard/charts/LineChart";
import ProjectSectionTable from "@/components/dashboard/projects/ProjectSectionTable";
import Timeline from "@/components/dashboard/orders/Timeline";
import Image from "next/image";
import {
    barChartData,
    barChartOptions,
} from "../../../helpers/chartConfigs/barChartConfig";
import {
    lineChartData,
    lineChartOptions,
} from "../../../helpers/chartConfigs/lineChartConfig1";
import { quickTiles } from "../../../helpers/dummyData/dashboardPage/quickTiles";

export default function Dashboard() {
    //state to determine if popup menu in project section should be visible
    const [showPopupMenu, setShowPopupMenu] = useState(false);

    //function to show popup menu
    function togglePopUpHandler() {
        setShowPopupMenu((prev) => !prev);
    }

    return (
        <div className={styles.page}>
            <section className={styles.QuickTileSection}>
                {quickTiles.map((q) => (
                    <QuickTile
                        key={q.title}
                        icon={q.icon}
                        title={q.title}
                        data={q.data}
                        percent={q.percent}
                        summaryText={q.summaryText}
                        shadowColor={q.shadowColor}
                        bgColor={q.bgColor}
                    />
                ))}
            </section>
            <section className={styles.ChartSection}>
                <BarChart
                    chartData={barChartData}
                    chartOptions={barChartOptions.options}
                    title="Website Views"
                    blurb="Last Campaign Performance"
                    summary="campaign sent 2 days ago"
                    shadowColor="rgb(26, 115, 232)"
                    bgColor="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
                />
                <LineChart
                    chartData={lineChartData}
                    chartOptions={lineChartOptions.options}
                    title="Daily Sales"
                    blurb="+15% increase in today sales"
                    summary="updated 4 min ago"
                    shadowColor="rgb(67, 160, 71)"
                    bgColor="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
                />
                <LineChart
                    chartData={lineChartData}
                    chartOptions={lineChartOptions.options}
                    title="Completed Tasks"
                    blurb="Last Campaign Performance"
                    summary="just updated"
                    shadowColor="rgb(25, 25, 25)"
                    bgColor="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
                />
            </section>
            <div className={styles.ProjectsAndOrdersContainer}>
                <section className={styles.ProjectsSection}>
                    <div className={styles.ProjectsHeader}>
                        <header>
                            <div className={styles.ProjectsHeaderSection1}>
                                <span className={styles.ProjectsHeaderTitle}>
                                    Projects
                                </span>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src="/icons/dashboard/projects/check-fill.svg"
                                        width={20}
                                        height={20}
                                        alt="checkmart"
                                        style={{ marginRight: ".5rem" }}
                                    />
                                    30 done this month
                                </div>
                            </div>
                            <Image
                                src="/icons/dashboard/projects/more-2-fill.svg"
                                width={20}
                                height={20}
                                alt="more"
                                style={{ cursor: "pointer" }}
                                onClick={togglePopUpHandler}
                            />
                            {showPopupMenu && (
                                <div className={styles.popupMenu}>
                                    <div
                                        className={styles.popupMenuItem}
                                        onClick={togglePopUpHandler}
                                    >
                                        action
                                    </div>
                                    <div
                                        className={styles.popupMenuItem}
                                        onClick={togglePopUpHandler}
                                    >
                                        another action
                                    </div>
                                    <div
                                        className={styles.popupMenuItem}
                                        onClick={togglePopUpHandler}
                                    >
                                        something else
                                    </div>
                                </div>
                            )}
                        </header>
                    </div>
                    <ProjectSectionTable />
                </section>
                <section className={styles.OrdersSection}>
                    <div className={styles.OrdersHeader}>
                        <header>
                            <div className={styles.OrdersHeaderSection1}>
                                <span className={styles.OrdersHeaderTitle}>
                                    Orders overview
                                </span>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src="/icons/dashboard/orders/arrow-up-line.svg"
                                        width={20}
                                        height={20}
                                        alt="up arrow"
                                        style={{ marginRight: ".5rem" }}
                                    />
                                    24% this month
                                </div>
                            </div>
                        </header>
                    </div>
                    <Timeline />
                </section>
            </div>
        </div>
    );
}
