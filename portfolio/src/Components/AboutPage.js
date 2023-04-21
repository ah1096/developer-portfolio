import logo from '../images/AH_coding_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faPython, faBootstrap, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBugSlash, faCheckDouble, faDatabase, faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';

const brandLogo = {
    name: 'brandLogo',
    imageUrl: logo,
    imageHeight: 90,
    imageWidth: 90,
};



export const AboutPage = () => {
    useSlideInFromBottom()
    
    return ( 
        <div id="aboutpage" className="container vh-100 w-100 mx-auto slide-in-bottom">
            <h1>About me</h1>

            <div className="row align-items-center">
                <div id="abouttext" className="col-9">
                    <p>this is a blurb with some texts about my education, experience, and interests</p>
                </div>

                <div id="profilepic" className="col-3">
                    <img className="w-100" src={brandLogo.imageUrl} 
                    alt="a dark pink hexagon inside with is Alyssa Holbert's brand logo, 
                    a small letter H inside of a large letter A; boths letters share a 
                    horizontal line" />
                </div>
            </div>

            <div id="techstack" className="row">
                <div className="col-12">
                    <h3 id="techheader">My tech stack + tools</h3>
                </div>

                <div id="techstackicons" className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="row">
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faHtml5} className="tool-icon" />
                                <span className="tool-name">HTML5</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faCss3Alt} className="tool-icon" />
                                <span className="tool-name">CSS3</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faJsSquare} className="tool-icon" />
                                <span className="tool-name">JavaScript</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faPython} className="tool-icon" />
                                <span className="tool-name">Python</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faReact} className="tool-icon" />
                                <span className="tool-name">React</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faBootstrap} className="tool-icon" />
                                <span className="tool-name">Bootstrap</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faPython} className="tool-icon" />
                                <span className="tool-name">Django</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faGithub} className="tool-icon" />
                                <span className="tool-name">GitHub/Git CLI</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faArrowsSpin} className="tool-icon" />
                                <span className="tool-name">Agile Methodology</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faDatabase} className="tool-icon" />
                                <span className="tool-name">REST APIs</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faBugSlash} className="tool-icon" />
                                <span className="tool-name">Debugging</span>
                            </div>
                            </div>
                            <div className="col-6 col-md-4">
                            <div className="tool">
                                <FontAwesomeIcon icon={faCheckDouble} className="tool-icon" />
                                <span className="tool-name">Test-Driven Development </span>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};