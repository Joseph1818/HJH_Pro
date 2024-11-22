import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WorldwidePresence({ t, backgroundImage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white bg-opacity-80 rounded-lg shadow-lg"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">{t('WORLD WIDE PRESENCE')}</h2>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg">{t('Our company has a strong global presence, with offices in major cities around the world.')}</p>
        </div>
      </motion.div>
    </div>
  );
}