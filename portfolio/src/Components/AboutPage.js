import headshot from '../images/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faPython, faBootstrap, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBugSlash, faCheckDouble, faDatabase, faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';

const profilePhoto = {
    name: 'headshot',
    imageUrl: headshot,
    imageHeight: 90,
    imageWidth: 90,
};

// TODO: make this component responsive; stack profile photo on top of AboutMe header

export const AboutPage = () => {
    useSlideInFromBottom()
    
    return ( 
        <div id="aboutpage" className="container vh-100 w-100 mx-auto mt-5 slide-in-bottom">
            <h1 id="aboutlink">About me</h1>

            <div className="row align-items-center">
                <div id="abouttext" className="col-9">
                    <p>Hello again -- you must be tired from scrolling, have some tea. 🍵 </p>
                    <p>I graduated from the <strong className="highlighttext"> University of Kentucky </strong> with a BA in Japanese, then made a career pivot and graduated from Awesome Inc's 
                    <strong className="highlighttext"> Web Developer Bootcamp </strong>. I've recently completed an <strong className="highlighttext">internship</strong> as a web developer in Seminaut Inc's testing team.</p>
                    <p>When I'm not working on coding projects, I spend my time watching horror films, playing video games, making art, and playing DnD ⚔️</p>
                </div>

                <div id="profilepic-container" className="col-3">
                    <img id="profilepic" className="w-100" src={profilePhoto.imageUrl} 
                    alt="an image of the website creator, Alyssa Holbert" />
                </div>
            </div>

            <div id="techstack" className="row">
                <div className="col-12">
                    <h3 id="techheader">My tech stack + tools</h3>
                </div>

                <div id="techstackicons" className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 w-100">
                    <div id="techstackrow" className="row row-cols-3 row-cols-md-2 row-cols-lg-6 w-100">
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faHtml5} className="tool-icon" />
                            <span className="tool-name">HTML5</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faCss3Alt} className="tool-icon" />
                            <span className="tool-name">CSS3</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faJsSquare} className="tool-icon" />
                            <span className="tool-name">JavaScript</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faPython} className="tool-icon" />
                            <span className="tool-name">Python</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faReact} className="tool-icon" />
                            <span className="tool-name">React</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faBootstrap} className="tool-icon" />
                            <span className="tool-name">Bootstrap</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faPython} className="tool-icon" />
                            <span className="tool-name">Django</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faGithub} className="tool-icon" />
                            <span className="tool-name">GitHub/Git CLI</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faArrowsSpin} className="tool-icon" />
                            <span className="tool-name">Agile Methodology</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faDatabase} className="tool-icon" />
                            <span className="tool-name">REST APIs</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faBugSlash} className="tool-icon" />
                            <span className="tool-name">Debugging</span>
                        </div>
                        </div>
                        <div className="col">
                        <div className="tool">
                            <FontAwesomeIcon icon={faCheckDouble} className="tool-icon" />
                            <span className="tool-name">Test-Driven Development</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};