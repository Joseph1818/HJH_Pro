import { useTranslation } from 'react-i18next';
import ReactFullpage from '@fullpage/react-fullpage';
import LanguageSwitcher from './components/LanguageSwitcher';
import HeroSection from './components/HeroSection';
import WorldwidePresence from './components/WorldwidePresence';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const sectionBackgrounds = {
  worldwide: '/HJH_PIC1.jpg',
  about: '/HJH_PIC2.jpg',
  contacts: '/HJH_PIC3.jpg',
};

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink href="#home">{t('HOME')}</NavLink>
                <NavLink href="#worldwide">{t('WORLD WIDE PRESENCE')}</NavLink>
                <NavLink href="#about">{t('ABOUT')}</NavLink>
                <NavLink href="#contacts">{t('CONTACTS')}</NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      <ReactFullpage
        scrollingSpeed={1000}
        scrollHorizontally={true}
        scrollBar={false}
        anchors={['home', 'worldwide', 'about', 'contacts']}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HeroSection t={t} />
              </div>
              <div className="section">
                <WorldwidePresence t={t} backgroundImage={sectionBackgrounds.worldwide} />
              </div>
              <div className="section">
                <AboutSection t={t} backgroundImage={sectionBackgrounds.about} />
              </div>
              <div className="section">
                <ContactSection t={t} backgroundImage={sectionBackgrounds.contacts} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 hover:border-gray-300 hover:text-gray-700"
    >
      {children}
    </a>
  );
}