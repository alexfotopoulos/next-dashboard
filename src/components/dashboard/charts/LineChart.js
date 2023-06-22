"use client";

import Image from "next/image";
import styles from "./LineChart.module.scss";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LineChart({
    chartData,
    chartOptions,
    title,
    blurb,
    summary,
    shadowColor,
    bgColor,
}) {
    return (
        <article className={styles.LineChart}>
            <div
                className={styles.Chart}
                style={{
                    background: bgColor,
                    boxShadow: `0px 6px 15px -8px ${shadowColor}`,
                }}
            >
                <Line data={chartData} options={chartOptions} redraw={true} />
            </div>
            <div>
                <div className={styles.LineChartDetails}>
                    <span className={styles.LineChartDetailsTitle}>
                        {title}
                    </span>
                    <span className={styles.LineChartDetailsBlurb}>
                        {blurb}
                    </span>
                    <hr />
                    <div className={styles.LineChartDetailsSummary}>
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
