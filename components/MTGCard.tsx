import Head from 'next/head'
import styles from '../styles/MTGCard.module.css'

// While this component could be refactored to dynamically populate data to be more reusable
// I don't have many plans to reuse it beyond the initial showcase for the blog/portfolio.
const MTGCard = () => {
  return (
    <div className={styles['mtg-card']}>
      {/* 
        This css stylesheet by Andrew Gioia has some premade Magic the Gathering mana cost icons that are pixel perfect, so I've included it here for use in the frame header.
      */}
      <Head>
      <link href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css" rel="stylesheet" type="text/css" />
      </Head>
      <div className={styles["card--background"]}>
        <div className={styles["card--frame"]}>
          <div className={styles["frame--header"]}>
            <p className={styles["card--name"]}>Stephen Wilson</p>
            <div className={styles['mana-icon-container']}>
            <i className={styles['mana-icon'] + " ms ms-cost ms-1"}></i>
            <i className={styles['mana-icon'] + " ms ms-cost ms-u"}></i>
            </div>
          </div>
          <img src="/images/mockup-portrait.jpg" alt="" className={styles["frame--art"]} />
          <div className={styles["frame--rarity"]}>
            <div className="flex align-center ml-1 type-container" style={{width: '100%'}}>
              <div className={styles["frame--rarity-circle"]}></div>
              <p className={styles["frame--rarity-type"]}>Creature - Human Wizard</p>
            </div>
            <img src="/images/r.svg" alt="SOI-icon" className={styles["rarity-icon"]}/>
            
          </div>
          <div className={styles["frame--text"]}>
            <p className={styles["frame--text-description frame-text-margin"]}>When Stephen Wilson enters the battlefield, move all Bug type creatures on the battlefield to the graveyard.</p>
            <p className={styles["frame--flavour-text"]}>What do you mean you deployed on a friday!?</p>
            <p className={styles["frame--text-stats"]}>3/2</p>
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