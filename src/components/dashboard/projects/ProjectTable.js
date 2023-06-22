import styles from "./ProjectTable.module.scss";
import Image from "next/image";

export default function ProjectTable() {
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
                        <Image src="/icons/dashboard/projects/companyLogos/npmjs-line.svg" width={30} height={30} alt="npm" style={{marginRight: "1rem"}} />Material UI XD Version</td>
                    <td>member circles</td>
                    <td>$14,000</td>
                    <td>completion bar</td>
                </tr>
                <tr>
                    <td className={styles.companyData}>
                        <Image src="/icons/dashboard/projects/companyLogos/drive-line.svg" width={30} height={30} alt="google drive" style={{marginRight: "1rem"}} />Add Progress Track</td>
                    <td>member circles</td>
                    <td>$3,000</td>
                    <td>completion bar</td>
                </tr>
                <tr>
                    <td className={styles.companyData}>
                        <Image src="/icons/dashboard/projects/companyLogos/slack-line.svg" width={30} height={30} alt="slack" style={{marginRight: "1rem"}} />Fix Platform Errors</td>
                    <td>member circles</td>
                    <td>Not set</td>
                    <td>completion bar</td>
                </tr>
                <tr>
                    <td className={styles.companyData}>
                        <Image src="/icons/dashboard/projects/companyLogos/spotify-fill.svg" width={30} height={30} alt="spotify" style={{marginRight: "1rem"}} />Launch our Mobile App</td>
                    <td>member circles</td>
                    <td>$20,500</td>
                    <td>completion bar</td>
                </tr>
                <tr>
                    <td className={styles.companyData}>
                        <Image src="/icons/dashboard/projects/companyLogos/github-line.svg" width={30} height={30} alt="github" style={{marginRight: "1rem"}} />Add the New Pricing Page</td>
                    <td>member circles</td>
                    <td>$500</td>
                    <td>completion bar</td>
                </tr>
                <tr>
                    <td className={styles.companyData}>
                        <Image src="/icons/dashboard/projects/companyLogos/invision-line.svg" width={30} height={30} alt="invision" style={{marginRight: "1rem"}} />Redesign New Online Shop</td>
                    <td>member circles</td>
                    <td>$2,000</td>
                    <td>completion bar</td>
                </tr>
            </tbody>
        </table>
    )
}