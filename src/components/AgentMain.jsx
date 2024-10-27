import styles from '../css/AgentMain.module.css'

const AgentMain = (props) => {
    return(
        <div className={styles.AgentMain}>
            <img src={props.AgentPic} alt={props.AltAgent} />
            <span>{props.Agent_name}</span>
        </div>
    )
}

export default AgentMain;