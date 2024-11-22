import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "HOME": "HOME",
                    "WORLD WIDE PRESENCE": "WORLD WIDE PRESENCE",
                    "ABOUT": "ABOUT",
                    "CONTACTS": "CONTACTS",
                    "Welcome to our global network": "Welcome to our global network",
                    "Discover our worldwide presence": "Discover our worldwide presence",
                    "Join us in shaping the future": "Join us in shaping the future",
                    "Our company has a strong global presence, with offices in major cities around the world.": "Our company has a strong global presence, with offices in major cities around the world.",
                    "We are a leading company in our industry, committed to innovation and excellence.": "We are a leading company in our industry, committed to innovation and excellence.",
                    "Get in touch with us through our various channels.": "Get in touch with us through our various channels."
                }
            },
            es: {
                translation: {
                    "HOME": "INICIO",
                    "WORLD WIDE PRESENCE": "PRESENCIA MUNDIAL",
                    "ABOUT": "ACERCA DE",
                    "CONTACTS": "CONTACTOS",
                    "Welcome to our global network": "Bienvenido a nuestra red global",
                    "Discover our worldwide presence": "Descubre nuestra presencia mundial",
                    "Join us in shaping the future": "Únete a nosotros para dar forma al futuro",
                    "Our company has a strong global presence, with offices in major cities around the world.": "Nuestra empresa tiene una fuerte presencia global, con oficinas en las principales ciudades del mundo.",
                    "We are a leading company in our industry, committed to innovation and excellence.": "Somos una empresa líder en nuestra industria, comprometida con la innovación y la excelencia.",
                    "Get in touch with us through our various channels.": "Ponte en contacto con nosotros a través de nuestros diversos canales."
                }
            },
            fr: {
                translation: {
                    "HOME": "ACCUEIL",
                    "WORLD WIDE PRESENCE": "PRÉSENCE MONDIALE",
                    "ABOUT": "À PROPOS",
                    "CONTACTS": "CONTACTS",
                    "Welcome to our global network": "Bienvenue dans notre réseau mondial",
                    "Discover our worldwide presence": "Découvrez notre présence mondiale",
                    "Join us in shaping the future": "Rejoignez-nous pour façonner l'avenir",
                    "Our company has a strong global presence, with offices in major cities around the world.": "Notre entreprise a une forte présence mondiale, avec des bureaux dans les principales villes du monde.",
                    "We are a leading company in our industry, committed to innovation and excellence.": "Nous sommes une entreprise leader dans notre industrie, engagée dans l'innovation et l'excellence.",
                    "Get in touch with us through our various channels.": "Contactez-nous via nos différents canaux."
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;