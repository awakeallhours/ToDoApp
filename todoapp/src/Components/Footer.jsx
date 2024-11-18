import styles from "./footer.module.css";

export default function Footer({completedTodos, totalTodos})
{
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed To Do's: {completedTodos}</span>
            <span className={styles.item}>Total To Do's: {totalTodos}</span>
        </div>
    );
}