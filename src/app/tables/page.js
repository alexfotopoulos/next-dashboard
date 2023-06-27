import styles from "./page.module.scss";
import AuthorTable from "@/components/tables/authorTable/AuthorTable";
import ProjectTable from "@/components/tables/projectTable/ProjectTable";
import { authorTable } from "../../../helpers/dummyData/tablesPage/authorTable";
import { projectTable } from "../../../helpers/dummyData/tablesPage/projectTable";

export default function Tables() {
    return (
        <div className={styles.page}>
            <section>
                <AuthorTable
                    thTitles={[
                        "AUTHOR",
                        "FUNCTION",
                        "STATUS",
                        "EMPLOYED",
                        "ACTION",
                    ]}
                    data={authorTable}
                />
                <div className={styles.spacing}></div>
                <ProjectTable
                    thTitles={[
                        "PROJECT",
                        "BUDGET",
                        "STATUS",
                        "COMPLETION",
                        "ACTION",
                    ]}
                    data={projectTable}
                />
            </section>
        </div>
    );
}
