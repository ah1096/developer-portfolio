import him from '../images/projects/him.jpg'
const placeholder = {
    name: 'placeholder',
    imageUrl: him,
};

export const ProjectCard = () => {
    return(
        <div>
            <div>
            <div class="hovercontainer h-100 w-100">
                <img src={placeholder.imageUrl} className="projectimage h-100 w-100"/>
                <div class="overlay">
                    <div class="hovertext">
                        <div id="projectaboutrow">
                            <h5 id="project-title">Project title</h5>
                            <h10 id="project-info" className="mb-2">Card subtitle</h10>
                        </div>

                        <div classname="row toolsused">
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                                <li><span className="badge badge-pill badge-secondary">tool 1</span></li>
                                <li><span className="badge badge-pill badge-secondary">tool 2</span></li>
                                <li><span className="badge badge-pill badge-secondary">tool 3</span></li>
                            </ul>
                        </div>

                        <div className="row" id="buttonrow">
                            <div className="col">
                                <button type="button" className="btn btn-primary pinkbutton" href="#">demo</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-primary pinkbutton" href="#">repo</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};
