import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./Services.module.css";

const ServiceTemplate = ({
  title,
  description,
  images,
  features,
  pricing,
  testimonials,
}) => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const handlePackageSelect = (plan) => {
    navigate("/booking", {
      state: {
        service: title,
        package: plan.title,
      },
    });
  };

  return (
    <motion.div
      className={styles.serviceContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className={styles.heroSection} variants={itemVariants}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        className={styles.featuresSection}
        variants={itemVariants}
      >
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>{index + 1}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Image Gallery */}
      <motion.section className={styles.gallerySection} variants={itemVariants}>
        <h2 className={styles.sectionTitle}>Our Work</h2>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={styles.galleryItem}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={process.env.PUBLIC_URL + image}
                alt={`${title} example ${index + 1}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Packages Section */}
      <motion.section className={styles.packagesSection} variants={itemVariants}>
        <h2 className={styles.sectionTitle}>Packages</h2>
        <div className={styles.packagesGrid}>
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              className={styles.packageCard}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={styles.packageTitle}>{plan.title}</h3>
              <ul className={styles.packageFeatures}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.choosePlanButton}
                onClick={() => handlePackageSelect(plan)}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      {testimonials && (
        <motion.section
          className={styles.testimonialsSection}
          variants={itemVariants}
        >
          <h2 className={styles.sectionTitle}>Client Experiences</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialCard}
                whileHover={{ y: -5 }}
              >
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.clientInfo}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.event}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
};

export default ServiceTemplate;