import styles from '../css/AgentBanner.module.css'

const AgentBanner = (props) => {
    return(
        <div className={styles.AgentBanner}>
            <img src={props.AgentImage} alt="Valorant Agent" />
            <span>{props.AgentName}</span>
        </div>
    )
}

export default AgentBanner;