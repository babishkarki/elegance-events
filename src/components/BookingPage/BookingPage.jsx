import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MessageModal from "../MessageModal/MessageModal";
import styles from "./BookingPage.module.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const BookingPage = () => {
  const [eventDate, setEventDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalData, setModalData] = useState({
    show: false,
    type: "",
    message: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    additionalInfo: "",
  });

  const { service, package: selectedPackage} = location.state || {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!selectedPackage) {
      navigate("/services");
    }
  }, [navigate, selectedPackage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      ...formData,
      date: eventDate?.toLocaleDateString(),
      service_name: service,
      package_name: selectedPackage,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_BOOKING_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setModalData({
        show: true,
        type: "success",
        message: "Your booking request has been submitted successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        additionalInfo: "",
      });
      setEventDate(null);
    } catch (error) {
      console.error("Booking Error:", error);
      setModalData({
        show: true,
        type: "error",
        message: "Failed to submit booking. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.bookingContainer}
    >
      <motion.div 
        className={styles.bookingHeader}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className={styles.bookingTitle}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
        >
          Book {selectedPackage}
        </motion.h1>
        <motion.div 
          className={styles.packageInfo}
        >
          <h2>{service} - {selectedPackage}</h2>
        </motion.div>
      </motion.div>

      <motion.form 
        onSubmit={handleSubmit} 
        className={styles.bookingForm}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className={styles.formColumn}>
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <div className={styles.inputWithIcon}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={styles.inputField}
                placeholder="Full Name"
              />
            </div>
          </motion.div>

          <motion.div className={styles.formGroup} variants={itemVariants}>
            <div className={styles.inputWithIcon}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={styles.inputField}
                placeholder="Email Address"
              />
            </div>
          </motion.div>

          <motion.div className={styles.formGroup} variants={itemVariants}>
            <div className={styles.inputWithIcon}>
              <FaPhone className={`${styles.inputIcon} ${styles.flipIcon}`} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className={styles.inputField}
                placeholder="Phone Number"
              />
            </div>
          </motion.div>
        </div>

        <div className={styles.formColumn}>
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <div className={styles.inputWithIcon}>
              <FaCalendarAlt className={styles.inputIcon} />
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Event Date"
                className={`${styles.inputField} ${styles.datePickerInput}`}
                popperClassName={styles.datePickerPopper}
                required
              />
            </div>
          </motion.div>

          <motion.div className={styles.formGroup} variants={itemVariants}>
            <div className={styles.inputWithIcon}>
              <FaMapMarkerAlt className={styles.inputIcon} />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
                className={styles.inputField}
                placeholder="Event Location"
              />
            </div>
          </motion.div>

          <motion.div className={styles.formGroup} variants={itemVariants}>
            <div className={styles.inputWithIcon}>
              <FaInfoCircle className={styles.infoIcon} />
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                rows="4"
                className={styles.textareaField}
                placeholder="Special requests, theme preferences, or other details..."
              />
            </div>
          </motion.div>
        </div>

        <motion.button
          type="submit"
          className={styles.submitButton}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className={styles.dualRingSpinner} />
          ) : (
            <>
              Complete Booking
              <FiArrowRight className={styles.arrowIcon} />
            </>
          )}
        </motion.button>
      </motion.form>

      {modalData.show && (
        <MessageModal
          type={modalData.type}
          message={modalData.message}
          onClose={() => setModalData({ show: false, type: "", message: "" })}
        />
      )}
    </motion.div>
  );
};

export default BookingPage;