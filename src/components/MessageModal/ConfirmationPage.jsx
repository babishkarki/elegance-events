import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../MessageModal/MessageModal.module.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const { message } = location.state || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.modalOverlay}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <div className={`${styles.modalIcon} ${styles.success}`}>
          <FaCheckCircle size={48} />
        </div>
        <h3 className={styles.modalTitle}>Booking Confirmed!</h3>
        <p className={styles.modalMessage}>
          {message || 'Your booking request has been successfully submitted.'}
        </p>
        <div className={styles.modalActions}>
          <a 
            href="/" 
            className={`${styles.modalButton} ${styles.successButton}`}
          >
            Return Home
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationPage;