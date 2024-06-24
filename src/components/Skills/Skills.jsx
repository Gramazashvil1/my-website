import "./Skills.scss"
import {useTranslation} from "react-i18next";
import skillsImage from '../../assets/images/skills_img.webp';

const skills = [
    {id: 1, skillName: 'HTML'},
    {id: 2, skillName: 'CSS'},
    {id: 3, skillName: 'Sass'},
    {id: 4, skillName: 'Tailwind CSS'},
    {id: 5, skillName: 'Bootstrap'},
    {id: 6, skillName: 'JavaScript'},
    {id: 7, skillName: 'React'},
    {id: 8, skillName: 'Redux'},
    {id: 9, skillName: 'Redux Toolkit'},
    {id: 10, skillName: 'Next.js'},
    {id: 11, skillName: 'Git'},
    {id: 12, skillName: 'GitHub'},
    {id: 13, skillName: 'Ant Design'},
    {id: 14, skillName: 'Swiper'},
    {id: 15, skillName: 'Vite'},
    {id: 16, skillName: 'REST API'},
];

function Skills() {
    const {t} = useTranslation()

    return (
        <div className="skills" id="skills">
            <div className="skills-main">
                <div className="skills-img-frame">
                    <img src={skillsImage} alt="SkillsImage" loading="lazy" width="350" height="280"/>
                </div>
                <div className="skills_right">
                    <h2 className="skills_title">{t('skillsTitle')}</h2>
                    <div className="skills_container">
                        {skills.map((skill) => (
                            <div key={skill.id} className="skill">{skill.skillName}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;