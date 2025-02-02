import { useEffect } from 'react';
import ServiceTemplate from './ServiceTemplate';

const Birthdays = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const serviceData = {
    title: "Birthday Celebrations",
    description: "Make every birthday unforgettable with our themed decorations, custom setups, and magical atmosphere creation.",
    images: [
      "/assets/birthdaybatman.png",
      "/assets/gallery-1.jpg",
      "/assets/image-3.png"
    ],
    features: [
      { title: "Themed Decor", description: "Custom themes from superheroes to princess parties" },
      { title: "Age-specific Designs", description: "Unique designs for kids, teens & adults" },
      { title: "Interactive Elements", description: "Photo booths, candy bars & activity zones" }
    ],
    pricing: [
      {
        title: "Basic Package",
        price: "$0",
        features: ["Basic decoration", "Balloon setup", "2-hour setup"]
      },
      {
        title: "Premium Package",
        price: "$0",
        features: ["Full theme decoration", "Interactive elements", "4-hour setup"]
      }
    ],
    testimonials: [
      {
        text: "Amazing birthday setup for our daughter's 10th birthday!",
        name: "Sarah Johnson",
        event: "10th Birthday Party"
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Birthdays;