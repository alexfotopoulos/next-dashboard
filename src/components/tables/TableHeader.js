import styles from "./TableHeader.module.scss"

export default function TableHeader({title}) {
  return (
    <div className={styles.TableHeader}>
        <div>{title}</div>
    </div>
  )
}
