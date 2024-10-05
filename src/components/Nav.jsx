import { useState } from 'react'
import styles from '../css/Nav.module.css'
import Valo from '../assets/icon/logo/Nav_valo.webp'
import Menu from '../assets/icon/clicks/menu.png'


const Nav = () => {

    const [openNav, setOpenNav] = useState(true);
    const handleNavClick = () => {
        setOpenNav( !openNav)
    }
    return(
        <div className={styles.Nav}>
            <div className={openNav ? styles.Nav_inner : styles.Nav_inner2}>
                <img src={Valo} alt="Valorant Logo" />
                <div className={styles.Nav_links}>
                    <span>HOME</span>
                    <span>AGENTS</span>
                    <span>ROLES</span>
                    <span>MAPS</span>
                    <span>WEAPONS</span>
                </div>
            </div>
            <img onClick={handleNavClick} className={styles.Menu} src={Menu} alt="Menu icon" />
        </div>
    )
}

export default Nav;