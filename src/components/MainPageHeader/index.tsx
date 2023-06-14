import React from "react";
import styles from "./MainPageHeader.module.scss";

const MainPageHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.avatarIcon}>АУ</div>
      <div>
        <p className={styles.name}>Абдурахман Усманов</p>
        <div>
          <ul className={styles.linksContainer}>
            <li className={styles.linkItem}>
              <img src="images/folder.svg" alt="icon" />
              <a href="https://t.me/Ausm2002" target="_blank">
                Telegram
              </a>
            </li>
            <li className={styles.linkItem}>
              <img src="images/folder.svg" alt="icon" />
              <a href="https://github.com/Abdurakhman20" target="_blank">
                GitHub
              </a>
            </li>
            <li className={styles.linkItem}>
              <img src="images/folder.svg" alt="icon" />
              <a href="resume/Usmanov_Abdurakhman_CV.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainPageHeader;
