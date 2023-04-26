
export const ProjectCard = ({ id, title, imageUrl, subtitle, tool1, tool2, tool3, demolink, repolink }) => {

    
    return(
        
        <div key={id} className="col-6 col-sm-4 col-md-3">
            <div className="hovercontainer h-auto w-auto">
                <img src={imageUrl} className="projectimage img-fluid"/>
                <div className="overlay">
                    <div className="hovertext">
                        <div id="projectaboutrow">
                            <h5 id="project-title">{title}</h5>
                            <h10 id="project-info" className="mb-2">{subtitle}</h10>
                        </div>

                        <div className="row toolsused">
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                                <li><span className="badge badge-pill badge-secondary">{tool1}</span></li>
                                <li><span className="badge badge-pill badge-secondary">{tool2}</span></li>
                                <li><span className="badge badge-pill badge-secondary">{tool3}</span></li>
                            </ul>
                        </div>

                        <div className="row" id="buttonrow">
                            <div className="col">
                                <button type="button" className="btn btn-primary pinkbutton" href={demolink}>demo</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-primary pinkbutton" href={repolink}>repo</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};
