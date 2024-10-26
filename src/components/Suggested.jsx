import { Link } from 'react-router-dom';
import styles from '../css/Suggested.module.css'

const Suggested = (props) => {
    return(
        <div className={styles.Suggested}>
            <Link><img src={props.Suggested1}/></Link>
            <Link><img src={props.Suggested2}/></Link>
            <Link><img src={props.Suggested3}/></Link>
            <Link><img src={props.Suggested4}/></Link>
            <Link><img src={props.Suggested5}/></Link>
        </div>
    )
}

export default Suggested;