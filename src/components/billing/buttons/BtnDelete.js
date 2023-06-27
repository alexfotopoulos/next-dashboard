import styles from "./BtnDelete.module.scss";
import Image from "next/image";

export default function BtnDelete() {
    return (
        <div className={styles.BtnDelete}>
            <Image
                src="/icons/billing/buttons/delete-bin-7-fill.svg"
                width={14}
                height={14}
                alt="delete"
            />
            <div className={styles.text}>DELETE</div>
        </div>
    );
}
