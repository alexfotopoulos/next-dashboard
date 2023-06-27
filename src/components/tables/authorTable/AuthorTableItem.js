import styles from "./AuthorTableItem.module.scss";

export default function AuthorTableItem({ data }) {
    return (
        <tr key={data.author.name}>
            <td>
                <div style={{ display: "flex" }}>
                    <div
                        className={styles.author}
                        style={{
                            backgroundColor: data.author.imageColor,
                        }}
                    >
                        {data.author.name[0].toUpperCase()}
                    </div>
                    <div>
                        <div className={styles.name}>{data.author.name}</div>
                        <div>{data.author.email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className={styles.role}>{data.function.role}</div>
                <div>{data.function.department}</div>
            </td>
            <td>
                <div
                    className={
                        data.status === "ONLINE"
                            ? styles.online
                            : styles.offline
                    }
                >
                    {data.status}
                </div>
            </td>
            <td>{data.employed}</td>
            <td style={{ fontWeight: "bold", textAlign: "center" }}>Edit</td>
        </tr>
    );
}
