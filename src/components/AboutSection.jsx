import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutSection({ t, backgroundImage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <div className="relative min-h-screen flex items-stretch">
      <motion.div
        className="absolute inset-0 w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={imageVariants}
      />
      <div className="w-1/2 ml-auto bg-white bg-opacity-90 flex items-center justify-center p-12">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={contentVariants}
        >
          <h2 className="text-4xl font-bold mb-6">{t('ABOUT')}</h2>
          <div className="prose prose-lg">
            <p>{t('We are a leading company in our industry, committed to innovation and excellence.')}</p>
            <p>{t('Our mission is to provide cutting-edge solutions that transform businesses and improve lives.')}</p>
            <p>{t('With a team of dedicated professionals and years of experience, we strive to exceed expectations and deliver exceptional results.')}</p>
            <ul>
              <li>{t('Global presence in over 50 countries')}</li>
              <li>{t('More than 10,000 satisfied customers worldwide')}</li>
              <li>{t('Industry-leading research and development')}</li>
              <li>{t('Commitment to sustainability and social responsibility')}</li>
            </ul>
            <p>{t('Join us in shaping the future of technology and business solutions.')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}