import styles from '../../css/AgentDetails.module.css'
import Nav from '../../components/Nav';
import SkillsIcon from '../../components/SkillsIcon';

import AstraMain from '../../assets/agents/Astra/Astra_main.webp'
import AgentMain from '../../components/AgentMain';
import Lore from '../../components/Lore';
import AgentRole from '../../components/AgentRole';
import Controller from '../../assets/icon/roles/Controller.webp'
import Next from '../../assets/icon/clicks/next.png'
import First from '../../assets/agents/Astra/first.webp'

const Astra = () => {
    return(
        <div className={styles.AgentDetails}>
            <Nav/>
            <div className={styles.AgentDetails_body}>
                <div className={styles.Left_part}>
                    <div></div>
                    <img src={Next} alt="Previous icon" className={styles.Prev}/>
                    <div className={styles.Lore_container}>
                        <AgentRole Role_icon={Controller} Role_name={"Controller"}/>
                        <Lore Lore_text={"A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next."}/>
                    </div>
                </div>

                <AgentMain AgentPic={AstraMain}/>
                <div className={styles.Right_part}>
                    <div></div>
                    <img src={Next} alt="Previous icon" className={styles.Next}/>
                    <div className={styles.Lore_container}>
                        <SkillsIcon SkillImg={First}/>
                        <span className={styles.Skill_text}>
                        Place Stars in Astral Form. ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Astra;