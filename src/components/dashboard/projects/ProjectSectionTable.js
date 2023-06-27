import styles from "./ProjectSectionTable.module.scss";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import Member from "./Member";
import {
    tableHeaders,
    tableData,
} from "../../../../helpers/dummyData/dashboardPage/projectSectionTable";

export default function ProjectSectionTable() {
    return (
        <table className={styles.ProjectTable}>
            <thead className={styles.ProjectTableHead}>
                <tr>
                    {tableHeaders.map((t) => (
                        <th key={t}>{t}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((t) => (
                    <tr key={t.name}>
                        <td className={styles.companyData}>
                            <Image
                                src={t.icon}
                                width={30}
                                height={30}
                                alt={t.name}
                                style={{ marginRight: "1rem" }}
                            />
                            {t.name}
                        </td>
                        <td>
                            <div className={styles.memberContainer}>
                                {t.members.map((m) => (
                                    <Member
                                        initial={m.initial}
                                        color={m.color}
                                    />
                                ))}
                            </div>
                        </td>
                        <td>{t.budget}</td>
                        <td>
                            <ProgressBar
                                color={t.completionColor}
                                width={t.completionWidth}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
