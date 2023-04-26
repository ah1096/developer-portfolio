import { ProjectCard } from './ProjectCard.js';
import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';


export const ProjectPage = () => {
    useSlideInFromBottom();

    return (
        <div id="projectpage" className="container vh-100 w-100 mx-auto mb-5 slide-in-bottom">

            <div className="row align-items-center mb-4">
                <div className="col-md-4">
                    <h1 id="projectlink">Projects</h1>
                </div>

                <div className="pixelfont col-md-8 align-self-center">
                    <h10>
                        see more at my <a href="#">portfolio gallery</a>!
                    </h10>
                </div>
            </div>

            <div id="projectcards" className="row flex-column flex-md-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                <div className="col-6 col-sm-4 col-md-3">
                    <ProjectCard />
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                    <ProjectCard />
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                    <ProjectCard />
                </div>
            </div>

        </div>
    );
};