import { Link } from 'react-router-dom';
import styles from '../css/Suggested.module.css'

const Suggested = (props) => {
    return(
        <div className={styles.Suggested}>
            <Link><img src={props.Suggested1}/></Link>
            <img src={props.Suggested2}/>
            <img src={props.Suggested3}/>
            <img src={props.Suggested4} />
            <img src={props.Suggested5} />
        </div>
    )
}

export default Suggested;