export const AboutPage = () => {
    return ( 
        <div id="aboutpage" className="container">
            <h1>About me</h1>

            <div className="row">
                <div id="abouttext" className="col-8">
                    <p>this is a blurb with some texts about my education, experience, and interests</p>
                </div>

                <div id="profilepic" className="col-4">
                    <h1>profile pic goes here</h1>
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
                    <ul id="iconlist">
                        <li>HTML + CSS</li>
                        <li>Javascript</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div className="col-4" id="frameworks">
                    <h10>frameworks and libraries</h10>
                    <ul id="iconlist">
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Django</li>
                    </ul>
                </div>

                <div className="col-4" id="otherskills">
                    <h10>other skills + tools</h10>
                    <ul id="iconlist">
                        <li>Github CLI</li>
                        <li>Agile Methodology</li>
                        <li>Communication</li>
                    </ul>
                </div>

                </div>

            </div>
        </div>
    );
};