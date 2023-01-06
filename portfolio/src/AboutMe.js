import AIprofilePic from './images/headshot.jpg';
const profilePic = {
    name: 'AIprofilePic',
    imageUrl: AIprofilePic,
    imageHeight: 450,
    imageWidth: 450,
};


export default function AboutMe(){
    return(
<div className="vh-100" id="AboutSection">
    <div className="px-4 py-5 my-5 ">

    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse  g-5 py-5">

            <div className="col-10 col-sm-8 col-lg-6">

                {/* <span className="hover-img"> */}
                    <img id="profilephoto" className="d-block mx-lg-auto img-fluid" 
                        loading="lazy" 
                        alt="my profile photo from Awesome Inc" 
                        src= {profilePic.imageUrl}
                        style={{
                            width: profilePic.imageWidth,
                            height: profilePic.imageHeight
                            }}
                    ></img>
                {/* </span> */}

            </div>

            <div className="col-lg-6">

                <h1 className="display-5 fw-bold lh-1 mb-3" >About Me</h1>
                    <div>
                        <p>Hi! My name is Alyssa, and I enjoy developing web applications.</p>
                        <p>
                            My coding journey started in the early days of the COVID-19 pandemic, when I
                            was working as an assistant language teacher in Japan. I took an online course
                            in introductory HTML, CSS and Javascript and discovered my love for coding.
                            I returned home to the States in August of 2022 and enrolled in Awesome Inc's 
                            Web Developer Bootcamp to further my knowledge of coding
                            and Agile development.
                        </p>
                        <p>Some of the technologies and languages I've worked with include:</p>
                    </div>

                    <ul id="skill-list">
                        <li>Javascript</li>
                        <li>HTML & CSS</li>
                        <li>Python</li>
                        <li>ReactJS</li>
                        <li>Django</li>
                        <li>Bootstrap</li>
                    </ul>

                    {/* <button id="linkbutton">learn more</button> */}
            </div>
        </div>
        </div>
    </div>
</div>




    )
}