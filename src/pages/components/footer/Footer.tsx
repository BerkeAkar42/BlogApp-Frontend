import React from 'react'
import styles from '../footer/footer.module.css'
// {`${styles.}`}
function Footer() {
  return (
    <footer className={`mt-5`}>
      <div className={`container`}>
        <div className={`row ${styles["footer-row"]}`}>
          <div className={`${styles.col} col col-1 col-sm-2 col-md-3`}></div>
          <div className={`${styles.col} col`}>İçeriklerinizi Paylaşabileceğiniz Ücretsiz Bir Servis <br/> BlogApp</div>
          <div className={`${styles.col} col col-1 col-sm-2 col-md-3`}></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer