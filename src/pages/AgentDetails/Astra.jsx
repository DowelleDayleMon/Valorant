import styles from '../../css/AgentDetails.module.css'
import Nav from '../../components/Nav';

import AstraMain from '../../assets/agents/Astra/Astra_main.webp'
import AgentMain from '../../components/AgentMain';

const Astra = () => {
    return(
        <div className={styles.AgentDetails}>
            <Nav/>
            <div className={styles.AgentDetails_body}>
                <AgentMain AgentPic={AstraMain}/>
            </div>
        </div>
    )
}

export default Astra;