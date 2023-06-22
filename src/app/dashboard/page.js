"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import QuickTile from "../../components/dashboard/quicktiles/QuickTile";
import BarChart from "@/components/dashboard/charts/BarChart";
import LineChart from "@/components/dashboard/charts/LineChart";
import ProjectTable from "@/components/dashboard/projects/ProjectTable";
import Image from "next/image";
import {
    barChartData,
    barChartOptions,
} from "../../../helpers/chartConfigs/barChartConfig";
import {
    lineChartData,
    lineChartOptions,
} from "../../../helpers/chartConfigs/lineChartConfig1";

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
                <QuickTile
                    icon="hotel-bed-fill.svg"
                    title="Bookings"
                    data="281"
                    percent="+55%"
                    summaryText="than last week"
                    shadowColor="rgb(25, 25, 25)"
                    bgColor={
                        "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
                    }
                />
                <QuickTile
                    icon="bar-chart-2-fill.svg"
                    title="Today's Users"
                    data="2,300"
                    percent="+3%"
                    summaryText="than last month"
                    shadowColor="rgb(26, 115, 232)"
                    bgColor={
                        "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
                    }
                />
                <QuickTile
                    icon="money-dollar-circle-fill.svg"
                    title="Revenue"
                    data="34k"
                    percent="+1%"
                    summaryText="than yesterday"
                    shadowColor="rgb(67, 160, 71)"
                    bgColor={
                        "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
                    }
                />
                <QuickTile
                    icon="user-add-fill.svg"
                    title="Followers"
                    data="+91"
                    percent=""
                    summaryText="Just updated"
                    shadowColor="rgb(216, 27, 96)"
                    bgColor={
                        "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"
                    }
                />
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
                            {showPopupMenu && (<div className={styles.popupMenu}>
                                <div className={styles.popupMenuItem} onClick={togglePopUpHandler}>
                                    action
                                </div>
                                <div className={styles.popupMenuItem} onClick={togglePopUpHandler}>
                                    another action
                                </div>
                                <div className={styles.popupMenuItem} onClick={togglePopUpHandler}>
                                    something else
                                </div>
                            </div>)}
                        </header>
                    </div>
                    <ProjectTable />
                </section>
                <section className={styles.OrdersSection}>
                    orders overview
                </section>
            </div>
        </div>
    );
}
