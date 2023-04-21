import logo from '../images/AH_coding_logo.png';
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

                <div className="row">
                    <div className="col">
                        <h3 id="techheader">My tech stack + tools</h3>
                    </div>
                </div>

                <div id="techstackicons" className="row">
                {/* add appropriate icons later + add more from resume; make text visible on hover (desktop) or under icons (mobile) */}

                <div className="col-4" id="languages">
                    <h10>languages</h10>
                    <div className="iconlist">
                        <ul>
                            <li>HTML + CSS</li>
                            <li>Javascript</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>

                <div className="col-4" id="frameworks">
                    <h10>frameworks and libraries</h10>
                    <div className="iconlist">
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Django</li>
                        </ul>
                    </div>
                </div>

                <div className="col-4" id="otherskills">
                    <h10>other skills + tools</h10>
                    <div className="iconlist">
                        <ul>
                            <li>Github CLI</li>
                            <li>Agile Methodology</li>
                            <li>API Integration</li>
                        </ul>
                    </div>
                </div>

                </div>

            </div>
        </div>
    );
};