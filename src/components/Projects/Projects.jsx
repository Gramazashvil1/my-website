import "./Projects.scss"
import projectsData from '../../json/projects.json';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

function Projects() {

    const {t} = useTranslation();

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div className="projects" id="projects">
            <div className="projects_main">
                <div className="projects_header">
                    <h2 className="projects_title">
                        {t('projectsTitle')}
                    </h2>
                </div>

                <div className="projects_cards">
                    {projects.map(({id, title, techStackTitle, tech, live, liveLink, viewCode, viewCodeLink, image}) => (
                        <div className="projects_card" key={id}>
                            <div className="projects_card_image_frame">
                                <a target="_blank" rel='noopener noreferrer' href={t(`${liveLink}`)}>
                                    <img src={image} alt="ProjectImage" loading="lazy" width="380" height="245"/>
                                </a>
                            </div>
                            <div className="card_info_top">
                                <h3 className="card_title">
                                    <a target="_blank" rel='noopener noreferrer' href={t(`${liveLink}`)}>
                                        {t(`${title}`)}
                                    </a>
                                </h3>
                            </div>
                            <hr className="card_hr"/>
                            <h4 className="card_tech_stack_title">
                                {t(`${techStackTitle}`)}
                            </h4>
                            <div className="card_tech_stack_container">
                                {tech.map((t, index) => (
                                    <div className="card_tech_stack" key={index}>
                                        {t}
                                    </div>))}
                            </div>
                            <div className="projects_card_bottom">
                                <a target="_blank" rel='noopener noreferrer' href={t(`${liveLink}`)}>
                                    {t(`${live}`)}
                                </a>
                                {viewCodeLink &&
                                    <a target="_blank" rel='noopener noreferrer' href={t(`${viewCodeLink}`)}>
                                        {t(`${viewCode}`)}
                                    </a>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;