import todo from './images/todolist.gif';
import alarm from './images/alarmclock.gif';
import neighborly from './images/neighborly.gif';
import mindreader from './images/mindreadergif.gif';


const todogif = {
  name: 'todogif',
  imageUrl: todo,
  imageheight: 300,
  imageWidth: 300,
}

const alarmgif = {
  name: 'alarmgif',
  imageUrl: alarm,
  imageHeight: 300,
  imageWidth: 300,
}

const neighborlygif = {
  name: 'neighborlygif',
  imageUrl: neighborly,
  imageHeight: 300,
  imageWidth: 300,
}

const mindreadergif = {
  name: 'mindreadergif',
  imageUrl: mindreader,
  imageHeight: 300,
  imageWidth: 300,
}

export default function Projects(){
    return(
<div id="ProjectSection">
<div className="px-4 py-5 my-5">
  <div className="container col-xxl-8 px-4 py-5 text-center">

    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 projectheader">Things I've made</h1>
    </div>


    <div id="projectCard" className="card mb-3">
            <div className="row g-0">

              <div className="col-md-4">
                {/* <span className="hover-imgBW"> */}
                  <img src={neighborlygif.imageUrl} className="img-fluid bigproject" alt="..."></img>
                {/* </span> */}
              </div>

              <div className="col-md-8">
                <div className="card-body">
                <h7 className="text-align-start">featured project</h7>
                  <h2 className="card-title">Neighborly</h2>
                  <p className="card-text">My final project for Awesome Inc's web developer bootcamp: a social media site focused on building local connections, 
                                          getting to know your neighbors, and creating a small-scale barter economy 
                                          with other individuals in your community.</p>
                                          <button className="btn btn-outline-light"> <a HREF="#" target="_blank">visit site</a></button>
                </div>
              </div>

            </div>
      </div>


    {/* <div id="projectCard" className="card mb-3">
          <div className="row">

            <div className="col-md-8">
              <div className="card-body">
                <h7 className="text-align-start">featured project</h7>

                <h2 className="card-title">Weather App</h2>
                <p className="card-text">The first "real" project that I made for Awesome Inc's bootcamp, 
                                        a weather app that uses the OpenWeather API and dynamically renders all information 
                                        on the page with Javascript.
                                        Enter a valid ZIP code to view the weather for that location.</p>
                <a href="https://ah1096.github.io/weather-app/" target="_blank" rel="noopener noreferrer" className="card-text"><small className="text-muted">Link to project webpage</small></a>
              </div>
            </div>

            <div className="col-md-4">
              
                <img src={fillerpic.imageUrl} className="img-fluid rounded-end bigproject" alt="..."></img>
            
            </div>

          </div>
    </div> */}
  
</div>
    
    

    <div className="row px-4 py-5 my-5">
      <div className="card-group px-6 pb-6">

      <div id="projectCardSmall" className="container card col-4 mx-auto">
        <div className="d-flex justify-content-center">
          <span className="hover-img">
            <img src={alarmgif.imageUrl} className="card-img-top smallproject" alt="..."></img>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Alarm Clock</h5>
          <p className="card-text">A simple alarm clock application with date selection coded in JavaScript.</p>
          <a href="https://ah1096.github.io/alarm-clock/" target="_blank" rel="noreferrer">Visit site</a>
        </div>
      </div>

      <div id="projectCardSmall" className="container card col-4 mx-auto">
        <div className="d-flex justify-content-center">
          <span className="hover-img">
            <img src={todogif.imageUrl} className="card-img-top smallproject" alt="..."></img>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">2Dew</h5>
          <p className="card-text">A to-do list app that utilizes local storage to keep user data.</p>
          <a href="#" target="_blank" rel="noreferrer">Visit site</a>
        </div>
      </div>

      <div id="projectCardSmall" className="container card col-4 mx-auto">
        <div className="d-flex justify-content-center">
          <span className="hover-img">
            <img src={mindreadergif.imageUrl} className="card-img-top smallproject" alt="..."></img>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Mind Reader</h5>
          <p className="card-text">A fortune-teller that utilizes state manipulation to change page views.</p>
          <a href="https://ah1096.github.io/mind-reader/" target="_blank" rel="noreferrer">Visit site</a>
        </div>
      </div>
    </div>

    <div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-light" type="submit">
                <i class="fa-brands fa-github"></i>   <a href="https://github.com/ah1096" target="_blank" rel="noreferrer">see more</a>
                  </button>
              </div>
    </div>

</div>
</div>
</div>    
    )
}