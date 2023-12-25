import "./Projects.scss"
import project_img_1 from '../../assets/images/project_img_1.png'

import card_link_img from '../../assets/images/card_link_img.svg'
import card_github_img from '../../assets/images/card_github_img.svg'


function Projects() {
    return (
        <div className="projects">
            <div className="projects_main">
                <div className="projects_header">PROJECTS</div>
                <div className="projects_cards">

                    <div className="projects_card">
                        <div className="projects_card_image_frame">
                            <img src={project_img_1} alt="Project 1"/>
                        </div>
                        <div className="card_info_top">
                            <p className="card_title">Personal Website</p>
                            <p className="card_type">PORTFOLIO</p>
                        </div>
                        <hr className="card_hr"/>
                        <p className="card_tech_stack_title">Tech Stack</p>
                        <div className="card_info_bottom">
                            <div className="card_tech_stack">React</div>
                            <div className="card_tech_stack">JS</div>
                            <div className="card_tech_stack">Vite</div>
                            <div className="card_tech_stack">Scss</div>
                            <div className="card_tech_stack">React</div>
                            <div className="card_tech_stack">React</div>
                        </div>
                        <div className="projects_card_bottom">
                            <p>
                                <img src={card_link_img} alt="Live" />
                                View Live
                            </p>
                            <p>
                                <img src={card_github_img} alt="Live" />
                                View Code
                            </p>
                        </div>
                    </div>

                    <div className="projects_card">
                        <div className="projects_card_image_frame">
                            <img src={project_img_1} alt="Project 1"/>
                        </div>
                        <div className="card_info_top">
                            <p className="card_title">Personal Website</p>
                            <p className="card_type">PORTFOLIO</p>
                        </div>
                        <hr className="card_hr"/>
                        <p className="card_tech_stack_title">Tech Stack</p>
                        <div className="card_info_bottom">
                            <div className="card_tech_stack">React</div>
                            <div className="card_tech_stack">JS</div>
                            <div className="card_tech_stack">Vite</div>
                            <div className="card_tech_stack">Scss</div>
                            <div className="card_tech_stack">React</div>
                            <div className="card_tech_stack">React</div>
                        </div>
                        <div className="projects_card_bottom">
                            <p>
                                <img src={card_link_img} alt="Live" />
                                View Live
                            </p>
                            <p>
                                <img src={card_github_img} alt="Live" />
                                View Code
                            </p>
                        </div>
                    </div>


                    <div className="projects_card">
                        <div className="projects_card_image_frame">
                            <img src={project_img_1} alt="Project 1"/>
                        </div>
                        <div className="card_info_top">
                            <p className="card_title">Personal Website</p>
                            <p className="card_type">PORTFOLIO</p>
                        </div>
                        <hr className="card_hr"/>
                        <p className="card_tech_stack_title">Tech Stack</p>
                        <div className="card_info_bottom">
                            <div className="card_tech_stack">React</div>
                            <div className="card_tech_stack">JS</div>
                            <div className="card_tech_stack">Vite</div>
                            <div className="card_tech_stack">Scss</div>
                            <div className="card_tech_stack">React</div>
                            <div className="card_tech_stack">React</div>
                        </div>
                        <div className="projects_card_bottom">
                            <p>
                                <img src={card_link_img} alt="Live" />
                                View Live
                            </p>
                            <p>
                                <img src={card_github_img} alt="Live" />
                                View Code
                            </p>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
}

export default Projects;