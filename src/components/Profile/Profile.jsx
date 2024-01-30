import "./Profile.scss"
import Download_arrow from '../../assets/images/download_arrow.svg?react'
import Move_down_arrow from '../../assets/images/move_down_arrow.svg?react'
import ContactInfo from "../Contact_Info/ContactInfo.jsx";
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll"
import profileImage from '../../assets/images/profile_img.webp';

function Profile() {
    const {t} = useTranslation()

    return (
        <div className="profile" id="home">
            <div className="profile-main">
                <div className="profile-inner-left">

                    <h1>{t('profileHello')}</h1>
                    <h1>{t('profileFullName')}</h1>
                    <h1>{t('profileDeveloper')}</h1>

                    <p className="profile-text">
                        {t('profileText')}
                    </p>

                    <div className="buttons">
                        <Link to={"contact"} spy={true} smooth={true} offset={-20} duration={500} href={"#contact"}>
                            <Move_down_arrow/>
                            <span>
                                {t('profileContactBtn')}
                            </span>
                        </Link>

                        <a className="profile_btn" target="_blank" rel='noopener noreferrer'
                           href="https://drive.google.com/file/d/1m8VPatWZIaFI97oxyUXpjE4apXoBqjv5/view?usp=sharing">
                            <Download_arrow/>
                            <span>
                                {t('profileCvBtn')}
                            </span>
                        </a>
                    </div>

                    <div className="profile_el">
                        <div className="line_1"></div>
                        <div className="line_2">
                            <div className="line_3"></div>
                        </div>
                    </div>
                    <div className="profile-element"></div>
                </div>
                <div className="profile-inner-right">
                    <div className="profile-image-frame">
                        <img src={profileImage} alt="ProfileImage" width="411" height="490"/>
                    </div>
                    <ContactInfo/>
                </div>
            </div>
        </div>
    );
}

export default Profile;