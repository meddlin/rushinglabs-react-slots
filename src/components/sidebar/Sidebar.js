import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h3>Sidebar component...</h3>

            <ul>
                <li>Link One</li>
                <li>Link Two</li>
                <li>Link Three</li>
                <li>Link Four</li>
                <li>Link Five</li>
            </ul>
        </div>
    );
};

export default Sidebar;