import './App.css';
import { LandingPage } from './Components/LandingPage.js'
import { ProjectPage } from './Components/ProjectPage.js'
import { AboutPage } from './Components/AboutPage.js'
import { ContactPage } from './Components/ContactPage.js'
import { NavigationMenu } from './Components/NavigationMenu.js'

// TODO/stretch goals:
// - add typewriter effect to LandingPage header text?
// - add aseSprite avatar to Landinpage in place of icon


export default function App() {
  return (
<div>
<NavigationMenu />

{/* //LANDING PAGE: brand statement + icon */}
  <LandingPage />

{/* //PROJECT PAGE: top 3 projects as cards w/ hover effect for descriptions. */}
  <ProjectPage />

{/* //ABOUT PAGE: blurb about my education, professional experience, interests + photo; tech stack list */}

  <AboutPage />

{/* //CONTACT PAGE: blurb with CTA, icons w/ links to socials, email form */}
  <ContactPage />
  
</div>
  )
};
