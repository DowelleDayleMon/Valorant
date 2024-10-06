import styles from '../css/AgentMain.module.css'

const AgentMain = (props) => {
    return(
        <div className={styles.AgentMain}>
            <img src={props.AgentPic} alt={props.AltAgent} />
        </div>
    )
}

export default AgentMain;