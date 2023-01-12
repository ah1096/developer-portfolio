import AHLogoBlack from './images/AH_coding_logo_BLACK.png'

const Logo = {
  name: 'Logo',
  imageUrl: AHLogoBlack,
  imageHeight: 100,
  imageWidth: 100,
};


export default function Navbar() {
    return (

<div className="navbar">

    <nav id="navbar" className="navbar navbar-expand-lg">

        <div className="container-fluid">

            <a className="navbar-brand" href="#">
              <img className="logo" src={Logo.imageUrl} alt="" />

            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link"  href="/developer-portfolio/#AboutSectionV3">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/developer-portfolio/#ProjectSectionV3">Projects</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/developer-portfolio/#BlogSectionV3">Blog</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/developer-portfolio/#ContactSectionV3">Contact</a>
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


            </div>

          </div>
        </nav>
        </div>
    )
}