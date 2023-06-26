import styles from "./page.module.scss";
import Image from "next/image";
import BillingTile from "@/components/billing/BillingTile";
import LngBtnBlack from "@/components/billing/buttons/LngBtnBlack";
import Method from "@/components/billing/Method";

export default function Billing() {
    return (
        <div>
            <section className={styles.section1}>
                <div className={styles.section1subsection1}>
                    <div className={styles.subSection1section1}>
                        <div className={styles.card}>
                            <Image
                                src="/icons/billing/card/wifi-fill.svg"
                                width={20}
                                height={20}
                            />
                            <span className={styles.cardNumber}>
                                <span>4562</span>
                                <span>1122</span>
                                <span>4594</span>
                                <span>7852</span>
                            </span>
                            <div className={styles.cardInfo}>
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <div className={styles.cardHolder}>
                                            Card Holder
                                        </div>
                                        <div>Jack Peterson</div>
                                    </div>
                                    <div style={{ marginLeft: "2rem" }}>
                                        <div className={styles.expires}>
                                            Expires
                                        </div>
                                        <div>11/22</div>
                                    </div>
                                </div>
                                <Image
                                    src="/icons/billing/card/mastercard-fill.svg"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                        <div className={styles.salary}>
                            <BillingTile
                                icon="bank-fill.svg"
                                title="Salary"
                                blurb="Belong Interactive"
                                amount="+$2000"
                            />
                        </div>
                        <div className={styles.paypal}>
                            <BillingTile
                                icon="paypal-fill.svg"
                                title="Paypal"
                                blurb="Freelance Payment"
                                amount="$455"
                            />
                        </div>
                    </div>
                    <div className={styles.paymentMethod}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <span >Payment Method</span>
                           <LngBtnBlack title="+ ADD NEW CARD" />
                        </div>
                        <div className={styles.methodContainer}>
                            <Method icon="mastercard-fill.svg" last4="7852" />
                            <Method icon="visa-fill.svg" last4="5248" />
                        </div>
                    </div>
                </div>
                <div className={styles.section1subsection2}>2</div>
            </section>
            <section>2</section>
        </div>
    );
}
