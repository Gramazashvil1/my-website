import "./ContactInfo.scss"
import Linkedin_img from "../../assets/images/linkedin_img.svg?react";
import Mail_img from "../../assets/images/mail_img.svg?react";
import Github_img from "../../assets/images/github_img.svg?react";
import Phone_img from "../../assets/images/phone_img.svg?react";

function ContactInfo() {
    return (
        <div className="contact-info">
            <ul>
                <li>
                    <a target="_blank" rel='noopener noreferrer' href="#">
                        <Linkedin_img className="icon"/>
                    </a>
                </li>
                <li>
                    <a href="mailto: goga.ramazashvili@gmail.com">
                        <Mail_img className="icon"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noopener noreferrer' href="https://github.com/Gramazashvil1">
                        <Github_img className="icon"/>
                    </a>
                </li>
                <li>
                    <a href="tel:514-322-020">
                        <Phone_img className="icon"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;