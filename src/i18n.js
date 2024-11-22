import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "welcome": "Welcome to my website",
                    "home": "Home",
                    "about": "About",
                    "contact": "Contact",
                    "language": "Language"
                }
            },
            es: {
                translation: {
                    "welcome": "Bienvenido a mi sitio web",
                    "home": "Inicio",
                    "about": "Acerca de",
                    "contact": "Contacto",
                    "language": "Idioma"
                }
            },
            fr: {
                translation: {
                    "welcome": "Bienvenue sur mon site web",
                    "home": "Accueil",
                    "about": "À propos",
                    "contact": "Contact",
                    "language": "Langue"
                }
            }
        },
        lng: "en", // Set the default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;