import React from "react";
import styles from "./MainPageHeader.module.scss";

const MainPageHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <img className={styles.avatarIcon} src="images/Avatar.png" />
      <div>
        <p className={styles.name}>Иван Иванов</p>
        <div>
          <ul className={styles.linksContainer}>
            <li className={styles.linkItem}>
              <img src="images/folder.svg" alt="icon" />
              <a href="#">Telegram</a>
            </li>
            <li className={styles.linkItem}>
              <img src="images/folder.svg" alt="icon" />
              <a href="#">GitHub</a>
            </li>
            <li className={styles.linkItem}>
              <img src="images/folder.svg" alt="icon" />
              <a href="#">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainPageHeader;
