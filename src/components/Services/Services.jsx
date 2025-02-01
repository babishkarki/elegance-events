import React from 'react';
import styles from './Services.module.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { 
      title: 'Wedding Decorations',
      desc: 'Create your dream wedding with our exquisite floral arrangements and thematic designs',
      path: '/services/weddings'
    },
    {
      title: 'Corporate Events',
      desc: 'Professional setups for conferences, product launches, and corporate gatherings',
      path: '/services/corporate'
    },
    {
      title: 'Birthday Parties',
      desc: 'Themed decorations for memorable birthday celebrations',
      path: '/services/birthdays'
    }
  ];

  return (
    <section className={styles.services}>
      <h1 className={styles.heading}>Our Services</h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <article key={index} className={styles.card}>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <Link to={service.path} className={styles.cta}>
              View Details →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;