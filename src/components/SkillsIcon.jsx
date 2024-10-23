import styles from '../css/SkillsIcon.module.css'

const SkillsIcon = (props) => {
    return(
        <div className={styles.SkillsIcon}>
            <div></div>
            <img src={props.SkillImg} />
            <img src={props.SkillImg} />
            <img src={props.SkillImg} />
            <img src={props.SkillImg} />
        </div>
    )
}

export default SkillsIcon