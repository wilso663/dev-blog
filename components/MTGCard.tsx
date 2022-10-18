import styles from '../styles/MTGCard.module.css'

// While this component could be pretty easily refactored to dynamically populate data
// to be more reusable, I don't have many plans to reuse it beyond the initial showcase 
// for the blog/portfolio, but if that changes I will come back and make this dynamic.
const MTGCard = () => {
  return (
    <div className={styles['mtg-card']}>

      <div className={styles["card--background"]}>
        <div className={styles["card--frame"]}>
          <div className={styles["frame--header"]}>
            <p className={styles["card--name"]}>Stephen Wilson</p>
            <div className={styles['mana-icon-container']}>
            <i className={styles['mana-icon'] + " ms ms-cost ms-1"}></i>
            <i className={styles['mana-icon'] + " ms ms-cost ms-u"}></i>
            </div>
          </div>
          <img src="/images/self-portrait2.png" alt="" className={styles["frame--art"]} />
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