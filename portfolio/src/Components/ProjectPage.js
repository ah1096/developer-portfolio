import { ProjectCard } from './ProjectCard.js';
import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';

export const ProjectPage = () => {
    useSlideInFromBottom();

    return (
        <div id="projectpage" className="container vh-100 w-100 mx-auto mb-5 slide-in-bottom">

            <div className="row align-items-center">
                <div className="col-md-4">
                    <h1 id="projectlink">Projects</h1>
                </div>

                <div className="pixelfont col-md-8 align-self-center">
                    <h10>
                        see more at my <a href="#">portfolio gallery</a>!
                    </h10>
                </div>
            </div>

            <div id="projectcards" className="row mt-4 mb-4 justify-content-between flex-column flex-md-row">
                <div className="col-lg-4 col-sm-12">
                    <ProjectCard />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <ProjectCard />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
};
