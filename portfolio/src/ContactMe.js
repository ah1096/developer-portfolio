import resume from './images/Alyssa-Holbert-2023-resume.pdf'

export default function ContactMe(){
    return(
        <div className="vh-100 d-flex align-items-center justify-content-center" id="ContactSectionV3">
            <div className="row">
                <div className= "text-center">
                    <h1 className="display-5 fw-bold">Contact Me</h1>
                        <div className="col mx-auto">
                            <p className="lead mt-10">Questions, offers, advice? Want a website made? Get in touch with me.</p>
                            <div className="row justify-content-center">
                                <button className="col-2 mx-3 btn btn-outline-light"> <a href="mailto:arh.10.96@gmail.com?Subject=Hi%20Alyssa%21"><i class="fa-sharp fa-solid fa-envelope"></i> say hi </a></button>
                                <button className="col-2 mx-3 btn btn-outline-light"> <a href="https://www.linkedin.com/in/alyssa-r-holbert/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i> connect </a></button>
                                <button className="col-2 mx-3 btn btn-outline-light"><i class="fas fa-download" id="icon"></i>   <a href={resume} download="Alyssa_Holbert_resume">resumé</a></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}