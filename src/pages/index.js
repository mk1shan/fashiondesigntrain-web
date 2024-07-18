import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Carousel from "../components/carousel"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <Seo title="Home" />
      <Navbar navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
      <Header />
      <Carousel />
      <div className="container">
        <div className="card bg-white border-0">
          <div className="card-title text-center my-3 font-italic" style={{ fontFamily: 'Satisfy, cursive', fontSize: '1.5rem' }}>We make your dream dress a reality.</div>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionItem}>
              <div className="card-title text-center text-uppercase">Wedding Frocks</div>
              <p className="card-text font-weight-light">
                Designed to brighten the most important day of your life, our wedding frocks simply adorn you.
              </p>
              <a href="/wedding-frocks" className={styles.sectionButton}>VIEW COLLECTION</a>
              <p></p>
              <StaticImage
                src="../images/1.jpg"
                alt="Wedding Frock"
                className={styles.sectionImage}
              />
            </div>
            <div className={styles.sectionItem}>
              <div className="card-title text-center text-uppercase">Home Coming Frocks</div>
              <p className="card-text font-weight-light">
                Each frock tells a unique story. What would you like yours to say?
              </p>
              <a href="/home-coming-frocks" className={styles.sectionButton}>VIEW COLLECTION</a>
              <p></p>
              <StaticImage
                src="../images/2.jpg"
                alt="Wedding Frock"
                className={styles.sectionImage}
              />
            </div>
            <div className={styles.sectionItem}>
              <div className="card-title text-center text-uppercase">Frocks for Going Aways</div>
              <p className="card-text font-weight-light">Leave your old life behind in style.</p>
              <a href="/home-coming-frocks" className={styles.sectionButton}>VIEW COLLECTION</a>
              <p></p>
              <StaticImage
                src="../images/3.jpg"
                alt="Wedding Frock"
                className={styles.sectionImage}
              />
            </div>
            <div className={styles.sectionItem}>
              <div className="card-title text-center text-uppercase">Pre-shoot Dresses</div>
              <p className="card-text font-weight-light">
                Add colour to your photos with our pre-shoot dress collection.
              </p>
              <a href="/home-coming-frocks" className={styles.sectionButton}>VIEW COLLECTION</a>
              <p></p>
              <StaticImage
                src="../images/4.jpg"
                alt="Wedding Frock"
                className={styles.sectionImage}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-dark mt-auto">
        <div className="container py-4">
          <div className="row text-center">
            <div className="col">
              <a className="nav-link text-white" href="http://www.maxifashionhouse.com">Home</a>
            </div>
            <div className="col">
              <a className="nav-link text-white" href="http://www.maxifashionhouse.com/gallery">Gallery</a>
            </div>
            <div className="col">
              <a className="nav-link text-white" href="http://www.maxifashionhouse.com/wedding-frocks">Wedding</a>
            </div>
            <div className="col">
              <a className="nav-link text-white" href="http://www.maxifashionhouse.com/home-coming-frocks">Home Coming</a>
            </div>
            <div className="col">
              <a className="nav-link text-white" href="http://www.maxifashionhouse.com/going-away-frocks">Going Away</a>
            </div>
            <div className="col">
              <a className="nav-link text-white" href="http://www.maxifashionhouse.com/pre-shoot-dresses">Pre-shoot</a>
            </div>
            <div className="col">
              <a className="nav-link text-white" href="http://www.maxifashionhouse.com/contact-us">Contact Us</a>
            </div>
          </div>
          <div className="row text-center my-2">
            <div className="col-sm-12 text-center text-white">
              <img src="../images/favicon-32x32.jpg" alt="Maxi Fashion House" />
            </div>
            <div className="col-sm-12" style={{ color: 'darkgray' }}>
              Equipped to serve the most distinctive tastes, we provide bridal dresses for all occasions to make your special moments even more memorable.
            </div>
          </div>
          <div className="row text-center my-2">
            <div className="col">
              <a href="https://www.facebook.com/maxifashionhouse/" target="_blank" rel="noopener noreferrer" className="no-text-decor" style={{ color: 'darkgray' }}>
                <FontAwesomeIcon icon={faFacebook} className="mx-2" size="lg" />
              </a>
              <FontAwesomeIcon icon={faTwitter} className="mx-2" size="lg" style={{ color: 'darkgray' }} />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-sm-12 text-center" style={{ color: 'darkgray' }}>
              <p style={{ color: 'darkgray' }}>© 2024 Maxi Fashion House. All rights reserved.<br /></p>
              <hr style={{ borderTop: '1px solid darkgray', filter: 'drop-shadow(0px 0px 3px white)' }} />
              Designed &amp; developed by <a href="https://www.chanukawijayakoon.me" target="_blank">merovingienne</a>.
              <p></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default IndexPage;
