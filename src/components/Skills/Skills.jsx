import "./Skills.scss"
import skills_img from '../../assets/images/skills_img.png'

function Skills() {
    return (
        <div className="skills">
            <div className="skills-main">

                <div className="skills-img-frame">
                    <img src={skills_img} alt="skills"/>
                </div>

                <div className="skills_right">
                    <p className="skills_title">SKILLS</p>
                    <div className="skills_container">
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                        <div className="skill"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;