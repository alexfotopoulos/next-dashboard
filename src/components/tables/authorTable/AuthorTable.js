import styles from "./AuthorTable.module.scss";
import TableHeader from "../TableHeader";
import AuthorTableItem from "./AuthorTableItem";

export default function AuthorTable({ thTitles, data }) {
    return (
        <div className={styles.AuthorTableContainer}>
            <TableHeader title="Authors Table" />
            <table className={styles.AuthorTable}>
                <thead className={styles.AuthorTableHead}>
                    <tr>
                        {thTitles.map((t) => (
                            <th key={t}>{t}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className={styles.AuthorTableBody}>
                    {data.map(d => (
                        <AuthorTableItem key={d.author.name} data={d}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
