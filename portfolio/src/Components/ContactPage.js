import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';


export const ContactPage = () => {
  useSlideInFromBottom()

  return ( 

  <div id="contactpage" className="container vh-50 w-100 mx-auto">
      <div className="row align-items-center">

        <h1 id="contactlink">Contact me</h1>

        <div id="contacttext" className="col-6">
          <div className="row">
            <p>this is some text about how you can get in touch with me</p>
          </div>

          <div className="row align-items-center text-center">
            <ul className="list-inline justify-content-space-between">
              <li className="list-inline-item text-center">
                <a href="#">
                  <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                  <span className="d-block">LinkedIn</span>
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a href="#">
                  <FontAwesomeIcon className="social-icon" icon={faDiscord}/>
                  <span className="d-block">Discord</span>
                </a>
              </li>
              {/* <li className="list-inline-item text-center">
                <a href="#">
                  <FontAwesomeIcon className="social-icon" icon={faGithub}/>
                  <span className="d-block">GitHub</span>
                </a>
              </li> */}
            </ul>
          </div>

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
    );
};
