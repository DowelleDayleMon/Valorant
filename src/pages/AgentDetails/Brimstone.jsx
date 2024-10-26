import { useState } from 'react';
import styles from '../../css/AgentDetails.module.css';
import Nav from '../../components/Nav';
import SkillsIcon from '../../components/SkillsIcon';
import Suggested from '../../components/Suggested';
import AgentMain from '../../components/AgentMain';
import Lore from '../../components/Lore';
import AgentRole from '../../components/AgentRole';

import agentsData from '../../data/agentsData'; // Import the agents data

import Next from '../../assets/icon/clicks/next.png'

const Brimstone = () => {
    const [selectedImage, setSelectedImage] = useState(0); // Change to zero-based index

    const handleImageClick = (imgNumber) => {
        setSelectedImage(imgNumber);
    };

    const agent = agentsData.Brimstone; // Get data for Brimstone

    return (
        <div className={styles.AgentDetails}>
            <Nav />
            <div className={styles.AgentDetails_body}>
                <div className={styles.Left_part}>
                    <div></div>
                    <img src={Next} alt="Next icon" className={styles.Prev} />
                    <div className={styles.Lore_container2}>
                        <AgentRole Role_icon={agent.role_icon} Role_name={agent.role} />
                        <Lore Lore_text={agent.lore} />
                    </div>
                </div>

                <AgentMain AgentPic={agent.mainImage} />
                
                <div className={styles.Right_part}>
                    <div></div>
                    <div className={styles.Right_container}>
                        <img src={Next} alt="Next icon" className={styles.Next} />
                        <Suggested 
                            Suggested1={agent.suggested[0]} 
                            Suggested2={agent.suggested[1]} 
                            Suggested3={agent.suggested[2]} 
                            Suggested4={agent.suggested[3]} 
                            Suggested5={agent.suggested[4]} 
                        />
                    </div>
                    <div className={styles.Lore_container}>
                        <SkillsIcon 
                            handleImageClick={handleImageClick} 
                            selectedImage={selectedImage} 
                            Skill1={agent.skills[0].image} 
                            Skill2={agent.skills[1].image} 
                            Skill3={agent.skills[2].image} 
                            Skill4={agent.skills[3].image} 
                        />
                        <span className={styles.Skill_text}>
                            {agent.skills[selectedImage].description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brimstone;
