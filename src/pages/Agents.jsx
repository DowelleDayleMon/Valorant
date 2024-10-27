import { Link } from 'react-router-dom';
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

                <Link className={styles.SpecificAgent} to="/Agents/Astra">
                    <AgentBanner AgentImage={Astra} AgentName="ASTRA" />
                </Link>
                <Link className={styles.SpecificAgent} to="/Agents/Breach">
                    <AgentBanner AgentImage={Breach} AgentName="BREACH" />
                </Link>
                <Link className={styles.SpecificAgent} to="/Agents/Brimstone">
                    <AgentBanner AgentImage={Brimstone} AgentName="BRIMSTONE" />
                </Link>
                <Link className={styles.SpecificAgent} to="/Agents/Chamber">
                    <AgentBanner AgentImage={Chamber} AgentName="CHAMBER" />
                </Link>
                <Link className={styles.SpecificAgent} to="/Agents/Clove">
                    <AgentBanner AgentImage={Clove} AgentName="CLOVE" />
                </Link>
                <Link className={styles.SpecificAgent} to="/Agents/Cypher">
                    <AgentBanner AgentImage={Cypher} AgentName="CYPHER" />
                </Link>
                <Link className={styles.SpecificAgent} to="/Agents/Deadlock">
                    <AgentBanner AgentImage={Deadlock} AgentName="DEADLOCK" />
                </Link>
                <Link className={styles.SpecificAgent} to="/Agents/Fade">
                    <AgentBanner AgentImage={Fade} AgentName="FADE" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Gekko} AgentName="GEKKO" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Harbor} AgentName="HARBOR" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Jett} AgentName="JETT" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Kayo} AgentName="KAY/O" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Killjoy} AgentName="KILLJOY" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Neon} AgentName="NEON" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Omen} AgentName="OMEN" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Phoenix} AgentName="PHOENIX" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Raze} AgentName="RAZE" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Reyna} AgentName="REYNA" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Sage} AgentName="SAGE" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Skye} AgentName="SKYE" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Sova} AgentName="SOVA" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Viper} AgentName="VIPER" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Vyse} AgentName="VYSE" />
                </Link>
                <Link className={styles.SpecificAgent}>
                    <AgentBanner AgentImage={Yoru} AgentName="YORU" />
                </Link>

                </div>
            </div>
        </div>
    )
}

export default Agents;