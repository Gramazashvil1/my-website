import "./Footer.scss"
import {useTranslation} from "react-i18next";


function Footer() {

    const {t} = useTranslation();

    return (
        <footer>
            <div className="footer_main">
                <p>{t('footerTitle')}</p>
            </div>
        </footer>
    );
}

export default Footer;