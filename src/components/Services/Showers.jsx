import React, { useEffect } from 'react';
import ServiceTemplate from './ServiceTemplate';

const Showers = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const serviceData = {
    title: "Baby & Bridal Showers",
    description: "Celebrate life's beautiful transitions with themed showers and personalized decor.",
    images: [
      "/assets/shower-1.jpg",
      "/assets/shower-2.jpg",
      "/assets/shower-3.jpg"
    ],
    features: [
      { title: "Theme Options", description: "Nautical, floral, vintage themes" },
      { title: "Custom Invites", description: "Matching stationery designs" },
      { title: "Activity Stations", description: "DIY craft corners, games" }
    ],
    pricing: [
      {
        title: "Basic Shower",
        price: "$0",
        features: ["Table setups", "Basic backdrop", "3-hour service"]
      },
      {
        title: "Luxury Package",
        price: "$0",
        features: ["Full venue decor", "Custom activities", "6-hour service"]
      }
    ],
    testimonials: [
      {
        text: "My baby shower was Pinterest-worthy!",
        name: "Priya Menon",
        event: "Teddy Bear Theme Shower"
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Showers;