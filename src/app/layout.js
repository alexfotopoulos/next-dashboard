import "./globals.scss";
import { SidebarContextProvider } from "../../store/sidebarContext";
import styles from "./layout.module.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export const metadata = {
    title: "Next Dashboard",
    description:
        "A Dashboard clone of https://material-dashboard-react-nodejs.creative-tim.com/dashboard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={styles.body}>
                <SidebarContextProvider>
                    <Sidebar />
                    <div className={styles.main}>
                        <Navbar />
                        {children}
                    </div>
                </SidebarContextProvider>
            </body>
        </html>
    );
}
