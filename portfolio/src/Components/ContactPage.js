import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

import emailjs from 'emailjs-com';
import EMAILJS_CONFIG from '../emailjs.config';

// TODO: style this Component; make email form and button cute, add text, fix spacing+ make everything responsive
// TODO: maybe add the Footer component below this??

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, e.target, EMAILJS_CONFIG.USER_ID)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}



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
            <div className="col-sm-4">
              <a className="social-link" href="#">
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                <span className="d-block">LinkedIn</span>
              </a>
            </div>
            <div className="col-sm-4">
              <a className="social-link" href="#">
                <FontAwesomeIcon className="social-icon" icon={faDiscord}/>
                <span className="d-block">Discord</span>
              </a>
            </div>
            <div className="col-sm-4">
              <a className="social-link" href="#">
                <FontAwesomeIcon className="social-icon" icon={faGithub}/>
                <span className="d-block">GitHub</span>
              </a>
            </div>
        </div>

        </div>

        <div id="emailsection" className="col-6">

            <form onSubmit={sendEmail} id="emailsubmit">
              <div class="mb-3">
                <input type="text" class="form-control" name="from_name" id="nameinput" placeholder="name"/>
              </div>

              <div class="mb-3">
                <input type="email" class="form-control" name="reply_to" id="emailinput" placeholder="email"/>
              </div>

              <div class="mb-3">
                <textarea type="text" class="form-control" name="message" id="messageinput" placeholder="message" rows="4"/>
              </div>

              <button type="submit" className="btn btn-primary" href="#">say hi</button>
            </form>

        </div>

      </div>
    </div>
    );
};
