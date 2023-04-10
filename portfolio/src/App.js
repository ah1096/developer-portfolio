import './App.css';
import Navbar from './Navbar.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js'
import Footer from './Footer.js';
import BlogPosts from './BlogPosts.js'

function App() {
  return (
      <div className="App"> 
        <Navbar/>
        <AboutMe/>
        <Projects/>
        <BlogPosts/>
        <ContactMe/>
        <Footer/>
    </div>
  );
}

export default App;
