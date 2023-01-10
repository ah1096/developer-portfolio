

export default function ContactMe(){
    return(
        <div className="vh-100 d-flex align-items-center justify-content-center" id="ContactSection">
            <div className="row">
                <div className= "text-center">
                    <h1 className="display-5 fw-bold">Contact Me</h1>
                        <div className="col mx-auto">
                            <p className="lead mt-10">Questions, offers, advice? Want a website made? Get in touch with me.</p>
                            <div className="row justify-content-center">
                                <button className="col-2 mx-3 btn btn-outline-light"> <a HREF="mailto:arh.10.96@gmail.com?Subject=Hi%20Alyssa%21"><i class="fa-sharp fa-solid fa-envelope"></i> say hi </a></button>
                                <button className="col-2 mx-3 btn btn-outline-light"> <a HREF="https://www.linkedin.com/in/alyssa-r-holbert/"><i class="fa-brands fa-linkedin"></i> connect </a></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}