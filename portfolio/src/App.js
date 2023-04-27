import './App.css';
import { LandingPage } from './Components/LandingPage.js'
import { ProjectPage } from './Components/ProjectPage.js'
import { AboutPage } from './Components/AboutPage.js'
import { ContactPage } from './Components/ContactPage.js'
import { NavigationMenu } from './Components/NavigationMenu.js'
import { Footer } from './Components/Footer.js'

// TODO/stretch goals:
// - add typewriter effect to LandingPage header text?
// - add aseSprite avatar to Landinpage in place of icon
// - make Japanese-language single-page with AboutMe, portfolio gallery link, and Japanese resume download

export default function App() {
  return (
<div>
  <NavigationMenu />
  <LandingPage />
  <ProjectPage />
  <AboutPage />
  <ContactPage />
  <Footer />
</div>
  )
};
