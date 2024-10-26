// import { useState } from 'react';

// import styles from '../../css/AgentDetails.module.css';
// import Nav from '../../components/Nav';
// import SkillsIcon from '../../components/SkillsIcon';
// import Suggested from '../../components/Suggested';
// import AgentMain from '../../components/AgentMain';
// import Lore from '../../components/Lore';
// import AgentRole from '../../components/AgentRole';

// import AstraMain from '../../assets/agents/Astra/Astra_main.webp';
// import Controller from '../../assets/icon/roles/Controller.webp';
// import Next from '../../assets/icon/clicks/next.png';
// import FirstSkill from '../../assets/agents/Astra/2ndSkill.webp'; 
// import SecondSkill from '../../assets/agents/Astra/first.webp'; 
// import ThirdSkill from '../../assets/agents/Astra/3rdSkill.webp';
// import FourthSkill from '../../assets/agents/Astra/4thSkill.webp';
// import BrimstoneIcon from '../../assets/agents/Brimstone/Brimstone_icon.webp';
// import CloveIcon from '../../assets/agents/Clove/Clove_icon.webp';
// import HarborIcon from '../../assets/agents/Harbor/Harbor_icon.webp';
// import OmenIcon from '../../assets/agents/Omen/Omen_icon.webp';
// import ViperIcon from '../../assets/agents/Viper/Viper_icon.webp';

const Astra = () => {
    // const skillDescriptions = [
    //     "Place Stars in Astral Form. ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.",
    //     "Place Stars in Astral Form. ACTIVATE a Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay.",
    //     "Place Stars in Astral Form (X). ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside Vulnerable.",
    //     "ACTIVATE to enter Astral Form where you can place Stars with FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well."
    // ];

    // const [selectedImage, setSelectedImage] = useState(1);

    // const handleImageClick = (imgNumber) => {
    //     setSelectedImage(imgNumber);
    // };

    return (
        <div>
            {/* <Nav />
            <div className={styles.AgentDetails_body}>
                <div className={styles.Left_part}>
                    <div></div>
                    <img src={Next} alt="Next icon" className={styles.Prev} />
                    <div className={styles.Lore_container2}>
                        <AgentRole Role_icon={Controller} Role_name={"CONTROLLER"} />
                        <Lore Lore_text={"A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next."} />
                    </div>
                </div>

                <AgentMain AgentPic={AstraMain} />
                
                <div className={styles.Right_part}>
                    <div></div>
                    <div className={styles.Right_container}>
                        <img src={Next} alt="Next icon" className={styles.Next} />
                        <Suggested 
                            Suggested1={BrimstoneIcon} 
                            Suggested2={CloveIcon} 
                            Suggested3={HarborIcon} 
                            Suggested4={OmenIcon} 
                            Suggested5={ViperIcon} 
                        />
                    </div>
                    <div className={styles.Lore_container}>
                        <SkillsIcon 
                            handleImageClick={handleImageClick} 
                            selectedImage={selectedImage} 
                            Skill1={FirstSkill} 
                            Skill2={SecondSkill} 
                            Skill3={ThirdSkill} 
                            Skill4={FourthSkill} 
                        />
                        <span className={styles.Skill_text}>
                            {skillDescriptions[selectedImage - 1]} {/* Adjusted for better clarity */}
                        {/* </span>
                    </div>
                </div>
            </div> */} */
        </div>
    );
};

export default Astra;
