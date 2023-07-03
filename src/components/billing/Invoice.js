import styles from "./Invoice.module.scss";
import Image from "next/image";

export default function Invoice({ date, code, price }) {
    return (
        <article className={styles.Invoice}>
            <div className={styles.InvoiceSection1}>
                <span className={styles.date}>{date}</span>
                <span className={styles.code}>{code}</span>
            </div>
            <div className={styles.InvoiceSection2}>
                <span className={styles.price}>{price}</span>
                <div className={styles.pdfContainer}>
                    <Image
                        src="/icons/billing/invoices/file-pdf-line.svg"
                        width={20}
                        height={20}
                        alt="pdf icon"
                    />
                    <span>PDF</span>
                </div>
            </div>
        </article>
    );
}
