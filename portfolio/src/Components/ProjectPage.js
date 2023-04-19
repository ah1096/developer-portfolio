export const ProjectPage = () => {
    return (
    <div id="projectpage" className="container vh-100 w-100 mx-auto">
        <div className="row align-items-center">

            <div className="col-4">
                <h1>Projects</h1>
            </div>

            <div className="col-8 align-self-center">
                <h10>see more at my portfolio gallery!</h10>
            </div>

        </div>

        <div id="projectcards" className="h-75 row align-items-center">

        <div className="col-4 h-50">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Project title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary" href="#">demo</button>
                    <button type="button" className="btn btn-primary" href="#">github</button>
                </div>
            </div>
        </div>

        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Project title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary" href="#">demo</button>
                    <button type="button" className="btn btn-primary" href="#">github</button>
                </div>
            </div>
        </div>

        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Project title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary" href="#">demo</button>
                    <button type="button" className="btn btn-primary" href="#">github</button>
                </div>
            </div>
        </div>

        </div>
    </div>
    )
}