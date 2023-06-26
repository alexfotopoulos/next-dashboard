import styles from "./ProjectTableItem.module.scss";
import ProgressBar from "@/components/dashboard/projects/ProgressBar";
import Image from "next/image";

export default function ProjectTableItem({ data }) {
    return (
        <tr key={data.project.name}>
            <td>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image src={data.project.icon} width={30} height={30} />
                    <div className={styles.name}>{data.project.name}</div>
                </div>
            </td>
            <td>
                <div className={styles.role}>{data.budget}</div>
            </td>
            <td>
                <div className={styles.status}>{data.status}</div>
            </td>
            <td>
                <div style={{ marginBottom: ".5rem" }}>
                    {data.completion.percentage}
                </div>
                <div>
                    {
                        <ProgressBar
                            width={data.completion.percentage}
                            color={data.completion.color}
                        />
                    }
                </div>
            </td>
            <td className={styles.action}>
                <Image
                    src="/icons/dashboard/projects/more-2-fill.svg"
                    width={20}
                    height={20}
                    alt="more"
                    style={{ cursor: "pointer" }}
                />
            </td>
        </tr>
    );
}
