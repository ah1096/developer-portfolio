import { ProjectCard } from './ProjectCard.js'

export const ProjectPage = () => {
    return (
    <div id="projectpage" className="container vh-100 w-100 mx-auto">
        <div className="row align-items-center">
            <div className="col-4">
                <h1>Projects</h1>
            </div>
            <div className="col-8 align-self-center">
                <h10>see more at my   
                    <span id="highlighttext">
                        <a href="#">  portfolio gallery</a>! 
                    </span>
                </h10>
                    
            </div>
        </div>

        <div id="projectcards" className="h-75 row align-items-center">
            <div className="col-4 h-50">
                <ProjectCard />
            </div>
            <div className="col-4 h-50">
                <ProjectCard />
            </div>
            <div className="col-4 h-50">
                <ProjectCard />
            </div>
        </div>

    </div>
    )
}