import styles from "./page.module.scss";
import Image from "next/image";
import BillingTile from "@/components/billing/BillingTile";
import LngBtnBlack from "@/components/billing/buttons/LngBtnBlack";
import BtnOutline from "@/components/billing/buttons/BtnOutline";
import Method from "@/components/billing/Method";
import Invoice from "@/components/billing/Invoice";
import BillingInfo from "@/components/billing/BillingInfo";
import Transaction from "@/components/billing/Transaction";
import { billingTiles } from "../../../helpers/dummyData/billingPage/billingTiles";
import { methods } from "../../../helpers/dummyData/billingPage/methods";
import { invoices } from "../../../helpers/dummyData/billingPage/invoices";
import { billingInfo } from "../../../helpers/dummyData/billingPage/billingInfo";
import {
    newestTransactions,
    oldestTransactions,
} from "../../../helpers/dummyData/billingPage/transactions";

export default function Billing() {
    return (
        <div className={styles.page}>
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
                        {billingTiles.map((b) => (
                            <div className={styles.tile} key={b.title}>
                                <BillingTile
                                    icon={b.icon}
                                    title={b.title}
                                    blurb={b.blurb}
                                    amount={b.amount}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.paymentMethod}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div className={styles.paymentMethodTitle}>
                                Payment Method
                            </div>
                            <LngBtnBlack title="+ ADD NEW CARD" />
                        </div>
                        <div className={styles.methodContainer}>
                            {methods.map((m) => (
                                <Method
                                    key={m.last4}
                                    icon={m.icon}
                                    last4={m.last4}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.section1subsection2}>
                    <div className={styles.invoicesHeader}>
                        <div className={styles.invoicesHeaderTitle}>
                            Invoices
                        </div>
                        <BtnOutline title="VIEW ALL" />
                    </div>
                    <div className={styles.invoices}>
                        {invoices.map((i) => (
                            <Invoice
                                key={Math.random()}
                                date={i.date}
                                code={i.code}
                                price={i.price}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.section2Subsection1}>
                    <div className={styles.billingTitle}>
                        Billing Information
                    </div>
                    <div>
                        {billingInfo.map((b) => (
                            <BillingInfo
                                key={b.vat}
                                name={b.name}
                                company={b.company}
                                email={b.email}
                                vat={b.vat}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.section2Subsection2}>
                    <div className={styles.transactionsHeader}>
                        <div className={styles.transactionsHeaderTitle}>
                            Your Transactions
                        </div>
                        <div className={styles.dateContainer}>
                            <Image
                                src="/icons/billing/transactions/calendar-2-fill.svg"
                                width={20}
                                height={20}
                            />
                            <div style={{ marginLeft: ".5rem" }}>
                                23 - 30 March 2020
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: "3rem" }}>
                        <div style={{ marginBottom: "3rem" }}>Newest</div>
                        {newestTransactions.map((n) => (
                            <Transaction
                                key={n.company}
                                company={n.company}
                                date={n.date}
                                icon={n.icon}
                                amount={n.amount}
                            />
                        ))}
                    </div>
                    <div style={{ marginBottom: "3rem" }}>
                        <div style={{ marginBottom: "3rem" }}>Oldest</div>
                        {oldestTransactions.map((n) => (
                            <Transaction
                                key={n.company}
                                company={n.company}
                                date={n.date}
                                icon={n.icon}
                                amount={n.amount}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
