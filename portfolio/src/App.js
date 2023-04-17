import './App.css';



export default function App() {
  return (
<div>
{/* //LANDING PAGE: brand statement + icon */}
  <div id="landingpage" className="container">
    <div className="row">

        <div id="landingtext" className="col-8">
          <h1>Hi, I'm Alyssa</h1>
          <p>this is a blurb about my personal brand statement</p>
        </div>

        <div id="landingicon" className="col-4">
          <h1>an icon goes here</h1>
        </div>
      </div>
  </div>

{/* //PROJECT PAGE: top 3 projects as cards w/ hover effect for descriptions. */}

    <div id="projectpage" className="container">
      
        <div className="row">

          <div className="col-4">
            <h1>Projects</h1>
          </div>

          <div className="col-8 align-self-center">
            <h10>see more at my portfolio gallery!</h10>
          </div>

        </div>

      <div id="projectcards" className="row">

        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className="btn btn-primary" href="#">demo</button>
              <button type="button" className="btn btn-primary" href="#">github</button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className="btn btn-primary" href="#">demo</button>
              <button type="button" className="btn btn-primary" href="#">github</button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className="btn btn-primary" href="#">demo</button>
              <button type="button" className="btn btn-primary" href="#">github</button>
            </div>
          </div>
        </div>

      </div>
    </div>

{/* //ABOUT PAGE: blurb about my education, professional experience, interests + photo; tech stack list */}
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
          <h10>other skills + tools</h10><ul id="langicons" class="icons">
            <li>Github CLI</li>
            <li>Agile Methodology</li>
            <li>Communication</li>
          </ul>
        </div>

      </div>

    </div>
  </div>


{/* //CONTACT PAGE: blurb with CTA, icons w/ links to socials, email form */}

  <div id="contactpage" className="container">
    <div className="row">

      <h1>Contact me</h1>

      <div id="contacttext" className="col-6">
        <p>this is some text about how you can get in touch with me</p>

        {/* make these horizontal later */}
        <ul id="socialicons">
          <li>Linkedin</li>
          <li>Discord</li>
          <li>Github</li>
        </ul>

      </div>

      <div id="emailsection" className="col-6">

          <form id="emailsubmit">
            <div class="mb-3">
              <input type="text" class="form-control" id="nameinput"  placeholder="name"/>
            </div>

            <div class="mb-3">
              <input type="email" class="form-control" id="emailinput" placeholder="email"/>
            </div>

            <div class="mb-3">
              <textarea type="text" class="form-control" id="messagebody" placeholder="message" rows="4"/>
            </div>

            <button type="submit" className="btn btn-primary" href="#">say hi</button>
          </form>

      </div>

    </div>
  </div>

</div>
  )
};
