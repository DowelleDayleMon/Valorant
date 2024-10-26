import styles from '../css/SkillsIcon.module.css';

const SkillsIcon = (props) => {
  const { handleImageClick, selectedImage, Skill1, Skill2, Skill3, Skill4 } = props;

  return (
    <div className={styles.SkillsIcon}>
      <div className={styles.Extra}></div>
      <img
        onClick={() => handleImageClick(0)}
        src={Skill1}
        alt="Skill 1"
        className={selectedImage === 1 ? styles.active : ''}
      />
      <img
        onClick={() => handleImageClick(1)}
        src={Skill2}
        alt="Skill 2"
        className={selectedImage === 2 ? styles.active : ''}
      />
      <img
        onClick={() => handleImageClick(2)}
        src={Skill3}
        alt="Skill 3"
        className={selectedImage === 3 ? styles.active : ''}
      />
      <img
        onClick={() => handleImageClick(3)}
        src={Skill4}
        alt="Skill 4"
        className={selectedImage === 4 ? styles.active : ''}
      />
    </div>
  );
};

export default SkillsIcon;
