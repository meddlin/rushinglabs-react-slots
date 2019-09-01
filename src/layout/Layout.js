import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ header, sidebar, content }) => {
    return (
        <div>

            {header} {/* --> header slot */}

            <div className={styles.layoutStuff}>
                <div className={styles.bodyContainer}>

                    {content} {/* --> content slot */}

                </div>
                <div className={styles.sideContainer}>

                    {sidebar} 
                    
                </div>
            </div>
        </div>
    );
};

export default Layout;