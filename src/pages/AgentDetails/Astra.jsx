import { useState } from 'react';

import styles from '../../css/AgentDetails.module.css'
import Nav from '../../components/Nav';
import SkillsIcon from '../../components/SkillsIcon';

import AstraMain from '../../assets/agents/Astra/Astra_main.webp'
import AgentMain from '../../components/AgentMain';
import Lore from '../../components/Lore';
import AgentRole from '../../components/AgentRole';
import Controller from '../../assets/icon/roles/Controller.webp'
import Next from '../../assets/icon/clicks/next.png'
import First from '../../assets/agents/Astra/2ndSkill.webp'
import Second from '../../assets/agents/Astra/first.webp'
import Third from '../../assets/agents/Astra/3rdSkill.webp'
import Fourth from '../../assets/agents/Astra/4thSkill.webp'

const Astra = () => {

    const skill1 = "Place Stars in Astral Form. ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area."
    const skill2 = "Place Stars in Astral Form. ACTIVATE a Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay."
    const skill3 = "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside Vulnerable."
    const skill4 = "ACTIVATE to enter Astral Form where you can place Stars with FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well."
    
    const [selectedImage, setSelectedImage] = useState(1);
    const handleImageClick = (imgNumber) => {
        setSelectedImage(imgNumber);
      };
    
    return(
        <div className={styles.AgentDetails}>
            <Nav/>
            <div className={styles.AgentDetails_body}>
                <div className={styles.Left_part}>
                    <div></div>
                    <img src={Next} alt="Previous icon" className={styles.Prev}/>
                    <div className={styles.Lore_container}>
                        <AgentRole Role_icon={Controller} Role_name={"CONTROLLER"}/>
                        <Lore Lore_text={"A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next."}/>
                    </div>
                </div>

                <AgentMain AgentPic={AstraMain}/>
                <div className={styles.Right_part}>
                    <div></div>
                    <img src={Next} alt="Previous icon" className={styles.Next}/>
                    <div className={styles.Lore_container}>
                        <SkillsIcon handleImageClick={handleImageClick} selectedImage={selectedImage} Skill1={First} Skill2={Second} Skill3={Third} Skill4={Fourth}/>
                        <span className={styles.Skill_text}>
                            {selectedImage === 1 && skill1}
                            {selectedImage === 2 && skill2}
                            {selectedImage === 3 && skill3}
                            {selectedImage === 4 && skill4}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Astra;