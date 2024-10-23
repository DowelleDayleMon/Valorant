import styles from '../css/Lore.module.css'

const Lore = (props) => {
    return(
        <div className={styles.Lore}>
            <p className={styles.Lore_text}>{props.Lore_text}</p>
        </div>
    )
}

export default Lore;