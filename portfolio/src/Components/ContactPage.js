import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';

export const ContactPage = () => {
  useSlideInFromBottom()

  return ( 

  <div id="contactpage" className="container vh-100 w-100 mx-auto position-relative">
      <div className="row position-absolute bottom-50 alignt-items-center">

        <h1 id="contactlink">Contact me</h1>

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
    );
};
