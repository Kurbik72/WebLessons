import React from 'react'
import styles from './header.module.css'


function Header () {
    return(
        <div className={styles.info}>
            <div className={styles.all}>
            <div className={styles.oneblock}>
            <a href="#">Classcamp</a>
            </div>
            <div className={styles.secondblock}>
                <a href="#">Pricing</a>
                <a href="#">Find a course</a>
                <a href="#">For Creators</a>
            </div>
            </div>
            <div className={styles.thirdblock}>
                <a href="#">Sign in</a>
                <a href="#">Create a course</a>
            </div>
        </div>
    )
}

export default Header;
