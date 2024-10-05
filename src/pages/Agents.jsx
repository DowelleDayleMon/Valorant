import styles from '../css/Agents.module.css'
import Riot from '../assets/icon/logo/Riot_games_white.png'
import Astra from '../assets/agents/Astra/Astra_banner.webp';
import Breach from '../assets/agents/Breach/Breach_banner.webp';
import Brimstone from '../assets/agents/Brimstone/Brimstone_banner.webp';
import Chamber from '../assets/agents/Chamber/Chamber_banner.webp';
import Clove from '../assets/agents/Clove/Clove_banner.webp';
import Cypher from '../assets/agents/Cypher/Cypher_banner.webp';
import Deadlock from '../assets/agents/Deadlock/Deadlock_banner.webp';
import Fade from '../assets/agents/Fade/Fade_banner.webp';
import Gekko from '../assets/agents/Gekko/Gekko_banner.webp';
import Harbor from '../assets/agents/Harbor/Harbor_banner.webp';
import Jett from '../assets/agents/Jett/Jett_banner.webp';
import Kayo from '../assets/agents/Kayo/Kayo_banner.webp';
import Killjoy from '../assets/agents/Killjoy/Killjoy_banner.webp';
import Neon from '../assets/agents/Neon/Neon_banner.webp';
import Omen from '../assets/agents/Omen/Omen_banner.webp';
import Phoenix from '../assets/agents/Phoenix/Phoenix_banner.webp';
import Raze from '../assets/agents/Raze/Raze_banner.webp';
import Reyna from '../assets/agents/Reyna/Reyna_banner.webp';
import Sage from '../assets/agents/Sage/Sage_banner.webp';
import Skye from '../assets/agents/Skye/Skye_banner.webp';
import Sova from '../assets/agents/Sova/Sova_banner.webp';
import Viper from '../assets/agents/Viper/Viper_banner.webp';
import Vyse from '../assets/agents/Vyse/Vyse_banner.webp';
import Yoru from '../assets/agents/Yoru/Yoru_banner.webp';


import AgentBanner from '../components/AgentBanner'
import Nav from '../components/Nav'


const Agents = () => {
    return(
        <div className={styles.Agents}>
            <Nav />
            <div className={styles.Agents_main}>
                <img className={styles.Riot} src={Riot} alt="Riot logo" />
                <div className={styles.Agents_container}>
                <AgentBanner AgentImage={Astra} AgentName="ASTRA" />
                <AgentBanner AgentImage={Breach} AgentName="BREACH" />
                <AgentBanner AgentImage={Brimstone} AgentName="BRIMSTONE" />
                <AgentBanner AgentImage={Chamber} AgentName="CHAMBER" />
                <AgentBanner AgentImage={Clove} AgentName="CLOVE" />
                <AgentBanner AgentImage={Cypher} AgentName="CYPHER" />
                <AgentBanner AgentImage={Deadlock} AgentName="DEADLOCK" />
                <AgentBanner AgentImage={Fade} AgentName="FADE" />
                <AgentBanner AgentImage={Gekko} AgentName="GEKKO" />
                <AgentBanner AgentImage={Harbor} AgentName="HARBOR" />
                <AgentBanner AgentImage={Jett} AgentName="JETT" />
                <AgentBanner AgentImage={Kayo} AgentName="KAY/O" />
                <AgentBanner AgentImage={Killjoy} AgentName="KILLJOY" />
                <AgentBanner AgentImage={Neon} AgentName="NEON" />
                <AgentBanner AgentImage={Omen} AgentName="OMEN" />
                <AgentBanner AgentImage={Phoenix} AgentName="PHOENIX" />
                <AgentBanner AgentImage={Raze} AgentName="RAZE" />
                <AgentBanner AgentImage={Reyna} AgentName="REYNA" />
                <AgentBanner AgentImage={Sage} AgentName="SAGE" />
                <AgentBanner AgentImage={Skye} AgentName="SKYE" />
                <AgentBanner AgentImage={Sova} AgentName="SOVA" />
                <AgentBanner AgentImage={Viper} AgentName="VIPER" />
                <AgentBanner AgentImage={Vyse} AgentName="VYSE" />
                <AgentBanner AgentImage={Yoru} AgentName="YORU" />


                </div>
            </div>
        </div>
    )
}

export default Agents;