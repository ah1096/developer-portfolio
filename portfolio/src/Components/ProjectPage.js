import { ProjectCard } from './ProjectCard.js';
import { useSlideInFromBottom } from '../Hooks/UseSlideInFromBottom';
import mindreader from '../images/projects/refresh_mindreader.png';
import neighborly from '../images/projects/refresh_neighborly.png';
import todolist from '../images/projects/refresh_todolist.png';

// TODO: make this component responsive; make cards stack vertically w/o leaking into AboutMe section
// TODO: add repo links + demo links to each project
// TODO: make a portfolio gallery page with filterable tags

export const ProjectPage = () => {
    useSlideInFromBottom();

    const projects = [
        { id: 1, title: 'Mind Reader', imageUrl: mindreader, 
            subtitle: 'a fortune-teller that utilizes state manipulation to change page views', 
            tool1: 'HTML', tool2: 'CSS', tool3:'JavaScript',
            demolink:'https://ah1096.github.io/mind-reader/',
            repolink:'https://github.com/ah1096/mind-reader'},
        { id: 2, title: 'Neighborly', imageUrl: neighborly,
            subtitle:'a social media site focused on building local connections, getting to know your neighbors, and creating a small-scale barter economy with other individuals in your community', 
            tool1: 'React', tool2: 'Bootstrap', tool3:'Django',
            demolink:'https://neighborly-e5a2f.web.app/home',
            repolink:'https://github.com/ah1096/Neighborly'},
        { id: 3, title: 'To-Do List', imageUrl: todolist,
            subtitle: 'a to-do list app that utilizes local storage to save user data.',
            tool1: 'React', tool2: 'Bootstrap', tool3:'JavaScript',
            demolink:'',
            repolink:'https://github.com/ah1096/2dew'},
    ];

    return (
        <div id="projectpage" className="container vh-100 w-100 mx-auto mb-5 slide-in-bottom">

            <div className="row align-items-center mb-4">
                <div className="col-md-4">
                    <h1 id="projectlink">Projects</h1>
                </div>

                {/* <div className="pixelfont col-md-8 align-self-center">
                    <h10>
                        see more at my <a href="#">portfolio gallery</a>!
                    </h10>
                </div> */}
            </div>

            <div id="projectcards" className="row flex-column flex-md-row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

                    {projects.map((project) => (
                        <div key={project.id} className="col-6 col-sm-4 col-md-3">
                            <ProjectCard
                                title={project.title}
                                imageUrl={project.imageUrl}
                                subtitle={project.subtitle}
                                tool1={project.tool1}
                                tool2={project.tool2}
                                tool3={project.tool3}
                                demolink={project.demolink}
                                repolink={project.repolink}
                            />
                    </div>
                    ))}

            </div>

        </div>
    );
};