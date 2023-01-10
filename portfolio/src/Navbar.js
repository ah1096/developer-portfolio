import ReactDOM from 'react-dom'


export default function Navbar() {
    return (

<div classNameName="navbar">

    <nav id="navbar" className="navbar navbar-expand-lg">

        <div className="container-fluid">

            <a className="navbar-brand" href="#">Alyssa Holbert</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link"  href="/#AboutSection">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/#ProjectSection">Projects</a>
                </li>

                {/* <li className="nav-item">
                  <a className="nav-link" href="/#BlogSection">Blog</a>
                </li> */}

                <li className="nav-item">
                  <a className="nav-link" href="/#ContactSection">Contact</a>
                </li>

              </ul>

            {/* Get help on the language toggle */}
              {/* <ul id="language-toggle" classname="mt-4">
                <li className="d-inline">🇯🇵</li>
                <li className="d-inline">
                  <div className="form-check form-switch me-0">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"></input>
                    <label id="langToggle" className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                  </div>
                </li>
                <li className="d-inline">🇬🇧</li>
              </ul> */}


              <div className="d-flex">
                <button className="btn btn-outline-light" type="submit">
                  <i class="fas fa-download" id="icon"></i>   <a href="/images/Alyssa-Holbert-2023-resume.pdf" download="Alyssa_Holbert_resume_2023">resumé</a>
                  </button>
              </div>

            </div>

          </div>
        </nav>
        </div>
    )
}