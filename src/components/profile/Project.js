import styles from "./Project.module.scss";
import Image from "next/image";
import BtnOutline from "../billing/buttons/BtnOutline";
import Member from "../dashboard/projects/Member";

export default function Project({ image, headerText, title, text }) {
    return (
        <div className={styles.Project}>
            <Image
                src={`/images/profile/projects/${image}`}
                width={500}
                height={500}
                className={styles.ProjectImage}
            />
            <div>{headerText}</div>
            <div className={styles.ProjectTitle}>{title}</div>
            <p className={styles.ProjectText}>{text}</p>
            <div className={styles.ButtonMembersContainer}>
                <BtnOutline title="VIEW PROJECT" />
                <div className={styles.memberContainer}>
                    <Member initial="A" color="#ee9b00" />
                    <Member initial="B" color="#0a9396" />
                    <Member initial="C" color="#bb3e03" />
                    <Member initial="D" color="#e9d8a6" />
                </div>
            </div>
        </div>
    );
}
