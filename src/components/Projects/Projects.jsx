import "./Projects.scss"
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import projectImage1 from '/src/assets/images/pro_img_1.webp'
import projectImage2 from '/src/assets/images/pro_img_2.webp'
import projectImage3 from '/src/assets/images/pro_img_3.webp'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const projectsData = [
    {
        "id": 1,
        "live": "projectLiveView",
        "viewCode": "projectViewCode",
        "title": "Weather Forecast",
        "tech": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Vite", "Ant Design", "Swiper", "Axios", "SVGR", "Day.js", "Yarn", "API"],
        "liveLink": 'https://elementalforecast.netlify.app/',
        "viewCodeLink": "https://github.com/Gramazashvil1/weather-website",
        "image": projectImage1
    },
    {
        "id": 2,
        "live": "projectLiveView",
        "viewCode": "projectViewCode",
        "title": "projectTitle1",
        "tech": ["Empty", "Empty", "Empty", "Empty"],
        "liveLink": "#",
        "viewCodeLink": "#",
        "image": projectImage2
    },
    {
        "id": 3,
        "live": "projectLiveView",
        "viewCode": "projectViewCode",
        "title": "projectTitle1",
        "tech": ["Empty", "Empty", "Empty"],
        "liveLink": "#",
        "viewCodeLink": "#",
        "image": projectImage3
    }
]

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
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={25}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                            }, 800: {
                                slidesPerView: 2,
                            }, 1000: {
                                slidesPerView: 3,
                            }
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {projects.map(({
                                           id,
                                           title,
                                           tech,
                                           live,
                                           liveLink,
                                           viewCode,
                                           viewCodeLink,
                                           image
                                       }) => (
                            <SwiperSlide key={id}>
                                <div className="projects_card">
                                    <div className="projects_card_image_frame">
                                        <a target="_blank" rel='noopener noreferrer' href={t(`${liveLink}`)}>
                                            <img src={image} alt="ProjectImage" loading="lazy" width="380"
                                                 height="245"/>
                                        </a>
                                    </div>
                                    <div className="card_info_top">
                                        <h3 className="card_title">
                                            <a target="_blank" rel='noopener noreferrer' href={t(`${liveLink}`)}>
                                                {t(`${title}`)}
                                            </a>
                                        </h3>
                                    </div>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Projects;