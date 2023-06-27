import styles from "./BtnEdit.module.scss";
import Image from "next/image";

export default function BtnEdit() {
    return (
        <div className={styles.BtnEdit}>
            <Image
                src="/icons/billing/buttons/pencil-fill.svg"
                width={14}
                height={14}
                alt="Edit"
            />
            <div className={styles.text}>EDIT</div>
        </div>
    );
}
