import styles from "./BillingInfo.module.scss";
import BtnDelete from "./buttons/BtnDelete";
import BtnEdit from "./buttons/BtnEdit";

export default function BillingInfo({ name, company, email, vat }) {
    return (
        <div className={styles.BillingInfo}>
            <div className={styles.BillingInfoHeader}>
                <div>{name}</div>
                <div className={styles.buttonContainer}>
                    <BtnDelete />
                    <div style={{ marginLeft: "1rem" }}>
                        <BtnEdit />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.infoContainer}>
                    <div>Company Name</div>
                    <div className={styles.data}>{company}</div>
                </div>
                <div className={styles.infoContainer}>
                    <div>EMail Address:</div>
                    <div className={styles.data}>{email}</div>
                </div>
                <div className={styles.infoContainer}>
                    <div>VAT Number</div>
                    <div className={styles.data}>{vat}</div>
                </div>
            </div>
        </div>
    );
}
