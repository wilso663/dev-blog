import Head from 'next/head'
import styles from '../styles/MTGCard.module.css'

const MTGCard = () => {
  return (
    <div className={styles['mtg-card']}>
      <Head>
      <link href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css" rel="stylesheet" type="text/css" />
      </Head>
      <div className={styles["card--background"]}>
        <div className={styles["card--frame"]}>
          <div className={styles["frame--header"]}>
            <p className={styles["card--name"]}>Stephen Wilson</p>
            <div>
            <i className={styles['mana-icon'] + " ms ms-cost ms-1"}></i>
            <i className={styles['mana-icon'] + " ms ms-cost ms-u"}></i>
            </div>
          </div>
          <div className={styles["frame--art"]}>Card art</div>
          <div className={styles["frame--rarity"]}>
            <p className={styles["frame--rarity-type"]}>Creature - Human Wizard</p>
            <p>SOI-icon</p>
          </div>
          <div className={styles["frame--text"]}>
            <p className={styles["frame--text-description frame-text-margin"]}>When Stephen Wilson enters the battlefield, move all Bug type creatures on the battlefield to the graveyard.</p>
            <p className={styles["frame--flavour-text"]}>What do you mean you deployed on a friday!?</p>
          </div>
          <div className={styles["frame--misc-info"]}>
            <div className={styles["frame--misc-artist"]}>
              <p>54/297 R</p>
              <p>SOI &#x2022; EN Seb McKinnon</p>
            </div>
            <div className={styles["frame--misc-center"]}></div>
            <div className={styles["frame--misc-copyright"]}>
              &trade; &amp; &#169; 2016 Wizards of the Coast
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MTGCard