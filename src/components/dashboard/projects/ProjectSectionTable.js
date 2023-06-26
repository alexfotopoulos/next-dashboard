import styles from "./ProjectSectionTable.module.scss";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import Member from "./Member";

export default function ProjectSectionTable() {
    return (
            <table className={styles.ProjectTable}>
                <thead className={styles.ProjectTableHead}>
                    <tr>
                        <th>COMPANIES</th>
                        <th>MEMBERS</th>
                        <th>BUDGET</th>
                        <th>COMPLETION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.companyData}>
                            <Image
                                src="/icons/dashboard/projects/companyLogos/npmjs-line.svg"
                                width={30}
                                height={30}
                                alt="npm"
                                style={{ marginRight: "1rem" }}
                            />
                            Material UI XD Version
                        </td>
                        <td>
                            <div className={styles.memberContainer}>
                                <Member initial="A" color="#0a9396" />
                                <Member initial="J" color="#bb3e03" />
                            </div>
                        </td>
                        <td>$14,000</td>
                        <td>
                            <ProgressBar
                                color="rgb(26, 115, 232)"
                                width="60%"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.companyData}>
                            <Image
                                src="/icons/dashboard/projects/companyLogos/drive-line.svg"
                                width={30}
                                height={30}
                                alt="google drive"
                                style={{ marginRight: "1rem" }}
                            />
                            Add Progress Track
                        </td>
                        <td>
                            <div className={styles.memberContainer}>
                                <Member initial="B" color="#ee9b00" />
                                <Member initial="K" color="#0a9396" />
                                <Member initial="C" color="#001219" />
                                <Member initial="L" color="#e9d8a6" />
                            </div>
                        </td>
                        <td>$3,000</td>
                        <td>
                            <ProgressBar
                                color="rgb(26, 115, 232)"
                                width="10%"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.companyData}>
                            <Image
                                src="/icons/dashboard/projects/companyLogos/slack-line.svg"
                                width={30}
                                height={30}
                                alt="slack"
                                style={{ marginRight: "1rem" }}
                            />
                            Fix Platform Errors
                        </td>
                        <td>
                            <div className={styles.memberContainer}>
                                <Member initial="D" color="#bb3e03" />
                                <Member initial="T" color="#e9d8a6" />
                            </div>
                        </td>
                        <td>Not set</td>
                        <td>
                            <ProgressBar
                                color="rgb(67, 160, 71)"
                                width="100%"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.companyData}>
                            <Image
                                src="/icons/dashboard/projects/companyLogos/spotify-fill.svg"
                                width={30}
                                height={30}
                                alt="spotify"
                                style={{ marginRight: "1rem" }}
                            />
                            Launch our Mobile App
                        </td>
                        <td>
                            <div className={styles.memberContainer}>
                                <Member initial="S" color="#0a9396" />
                            </div>
                        </td>
                        <td>$20,500</td>
                        <td>
                            <ProgressBar
                                color="rgb(67, 160, 71)"
                                width="100%"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.companyData}>
                            <Image
                                src="/icons/dashboard/projects/companyLogos/github-line.svg"
                                width={30}
                                height={30}
                                alt="github"
                                style={{ marginRight: "1rem" }}
                            />
                            Add the New Pricing Page
                        </td>
                        <td>
                            <div className={styles.memberContainer}>
                                <Member initial="A" color="#0a9396" />
                                <Member initial="R" color="#e9d8a6" />
                            </div>
                        </td>
                        <td>$500</td>
                        <td>
                            <ProgressBar
                                color="rgb(26, 115, 232)"
                                width="30%"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.companyData}>
                            <Image
                                src="/icons/dashboard/projects/companyLogos/invision-line.svg"
                                width={30}
                                height={30}
                                alt="invision"
                                style={{ marginRight: "1rem" }}
                            />
                            Redesign New Online Shop
                        </td>
                        <td>
                            <div className={styles.memberContainer}>
                                <Member initial="B" color="#e9d8a6" />
                                <Member initial="N" color="#bb3e03" />
                                <Member initial="P" color="#001219" />
                                <Member initial="L" color="#0a9396" />
                            </div>
                        </td>
                        <td>$2,000</td>
                        <td>
                            <ProgressBar
                                color="rgb(26, 115, 232)"
                                width="40%"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
    );
}
