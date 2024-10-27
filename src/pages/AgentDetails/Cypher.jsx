import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/AgentDetails.module.css';
import Nav from '../../components/Nav';
import SkillsIcon from '../../components/SkillsIcon';
import Suggested from '../../components/Suggested';
import AgentMain from '../../components/AgentMain';
import Lore from '../../components/Lore';
import AgentRole from '../../components/AgentRole';

import agentsData from '../../data/agentsData'; 

import Next from '../../assets/icon/clicks/next.png'

const Cypher = () => {
    const [selectedImage, setSelectedImage] = useState(0); 

    const handleImageClick = (imgNumber) => {
        setSelectedImage(imgNumber);
    };

    const agent = agentsData.Cypher;

    return (
        <div className={styles.AgentDetails}>
            <Nav />
            <div className={styles.AgentDetails_body}>
                <div className={styles.Left_part}>
                    <div></div>
                    <Link to='/Agents/Clove'><img src={Next} alt="Next icon" className={styles.Prev} /></Link>
                    <div className={styles.Lore_container2}>
                        <AgentRole Role_icon={agent.role_icon} Role_name={agent.role} />
                        <Lore Lore_text={agent.lore} />
                    </div>
                </div>

                <AgentMain AgentPic={agent.mainImage} Agent_name={agent.Agent_name} />
                
                <div className={styles.Right_part}>
                    <div></div>
                    <div className={styles.Right_container}>
                    <Link to='/Agents/Deadlock'><img src={Next} alt="Next icon" className={styles.Next} /></Link>
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

export default Cypher;
