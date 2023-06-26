import styles from "./ProjectTable.module.scss";
import TableHeader from "../TableHeader";
import ProjectTableItem from "./ProjectTableItem";

export default function ProjectTable({ thTitles, data }) {
    return (
        <div className={styles.ProjectTableContainer}>
            <TableHeader title="Projects Table" />
            <table className={styles.ProjectTable}>
                <thead className={styles.ProjectTableHead}>
                    <tr>
                        {thTitles.map((t) => (
                            <th key={t}>{t}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={styles.ProjectTableBody}>
                    {data.map((d) => (
                        <ProjectTableItem key={d.project.name} data={d} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
