import styles from '../css/AgentRoles.module.css'

const AgentRole = (props) => {
    return(
        <div className={styles.AgentRoles}>
            <img src={props.Role_icon} alt="Agent role logo" />
            <span>{props.Role_name}</span>
        </div>
    )
}

export default AgentRole;