import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import styles from './Home.module.css';
import '../../styles/theme.css';

const services = [
  { title: "Birthday Decorations", img: "/assets/birthday.png", path: "/services/birthdays" },
  { title: "Baby & Bridal Showers", img: "/assets/babyshower.png", path: "/services/showers" },
  { title: "Surprise Proposals", img: "/assets/surprise-proposal.jpg", path: "/services/proposals" },
  { title: "Mehendi & Haldi Ceremonies", img: "/assets/mehendi.jpg", path: "/services/ceremonies" },
  { title: "School & College Events", img: "/assets/school-events.jpg", path: "/services/education" }
];

const Home = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: index * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <motion.section 
        className={styles.heroSection}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <Typewriter
              words={['Creating Moments of Elegance']}
              typeSpeed={80}
              deleteSpeed={0}
              cursor={false}
            />
          </h1>
          <p className={styles.heroSubtitle}>
            Premium event design and decoration services for life's most precious moments
          </p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className={styles.heroCta}>
              Start Planning Your Event →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Signature Services</h2>
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className={styles.serviceCard}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <div className={styles.cardImage}>
                  <img
                    src={process.env.PUBLIC_URL + service.img}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <Link to={service.path} className={styles.cardCta}>
                    Explore Service
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;