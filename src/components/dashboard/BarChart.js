"use client";

import Image from "next/image";
import styles from "./BarChart.module.scss";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function BarChart({
    chartData,
    chartOptions,
    title,
    blurb,
    summary,
    shadowColor,
    bgColor,
}) {
    return (
        <article className={styles.BarChart}>
            <div
                className={styles.Chart}
                style={{
                    background: bgColor,
                    boxShadow: `0px 6px 15px -8px ${shadowColor}`,
                }}
            >
                <Bar data={chartData} options={chartOptions} redraw={true} />
            </div>
            <div>
                <div className={styles.BarChartDetails}>
                    <span className={styles.BarChartDetailsTitle}>{title}</span>
                    <span className={styles.BarChartDetailsBlurb}>{blurb}</span>
                    <hr />
                    <div className={styles.BarChartDetailsSummary}>
                        <Image
                            src="icons/dashboard/charts/time-line.svg"
                            width={16}
                            height={16}
                            alt="time icon"
                        />
                        <span>{summary}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
