import "./About.scss"
import {useTranslation} from "react-i18next";
import aboutImage from '../../assets/images/about_img.webp';


function About() {
    const {t} = useTranslation()

    return (
        <div className="about" id="about">
            <div className="about-main">
                <div className="about-img-frame">
                    <img src={aboutImage} alt="AboutImage" loading="lazy" width="350" height="280"/>
                </div>
                <div className="about_right">
                    <h2 className="about_title">{t('aboutTitle')}</h2>
                    <p className="about_text">
                        {t('aboutText')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;