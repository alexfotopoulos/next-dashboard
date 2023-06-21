import styles from "./page.module.scss";
import QuickTile from "../../components/dashboard/QuickTile";
import BarChart from "@/components/dashboard/BarChart";
import LineChart from "@/components/dashboard/LineChart";
import {
    barChartData,
    barChartOptions,
} from "../../../helpers/chartConfigs/barChartConfig";
import {
    lineChartData,
    lineChartOptions,
} from "../../../helpers/chartConfigs/lineChartConfig1";

export default function Dashboard() {
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
            <div>
                <section>projects</section>
                <section>orders overview</section>
            </div>
        </div>
    );
}
