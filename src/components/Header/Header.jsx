import "./Header.scss"
import {useEffect, useState} from "react";
import {Button, Drawer, Switch} from "antd";
import {Link} from "react-scroll"
import {useTranslation} from "react-i18next";

function Header() {
    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === 'undefined') {
            localStorage.setItem('theme', 'dark-theme');
            return 'dark-theme';
        }
        return localStorage.getItem('theme');
    });

    const [themeStatus, setThemeStatus] = useState(false);
    const [open, setOpen] = useState(false);
    const {t, i18n} = useTranslation();

    function changeLanguage(language) {
        i18n.changeLanguage(language);
    }

    const menuItems = [
        {id: 1, title: 'home'},
        {id: 2, title: 'about'},
        {id: 3, title: 'skills'},
        {id: 4, title: 'projects', offset: -60},
        {id: 5, title: 'contact'},
    ];

    function switchTheme() {
        setTheme((perv) => (perv === 'dark-theme' ? 'light-theme' : 'dark-theme'));
    }

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
        setThemeStatus(theme !== 'dark-theme');
    }, [theme]);

    const openCloseDrawer = () => {
        setOpen((prev) => !prev);
    };

    return (
        <header className="header">
            <nav className="nav">

                <div className="logo">
                    <h1>
                        <Link to={"home"}
                              spy={true}
                              smooth={true}
                              offset={-10}
                              duration={500}
                        >
                            G.R
                        </Link>
                    </h1>
                </div>

                <Drawer title={t('menuTitle')} placement="right" onClose={openCloseDrawer} open={open}>

                    <ul>
                        {menuItems.map((item) =>
                            (<li className="ant-drawer-li" key={item.id}>
                                <Link to={item.title}
                                      spy={true}
                                      smooth={true}
                                      offset={item.offset ?? -30}
                                      duration={500}
                                      onClick={openCloseDrawer}
                                >
                                    {i18n.language === 'en' ? t(item.title).toUpperCase() : t(item.title)}
                                </Link>
                            </li>))}
                    </ul>
                </Drawer>
                <ul>
                    {menuItems.map((item) =>
                        (<li className="main-menu-li" key={item.id}>
                            <Link to={item.title}
                                  spy={true}
                                  smooth={true}
                                  offset={item.offset ?? -250}
                                  duration={500}>
                                {i18n.language === 'en' ? t(item.title).toUpperCase() : t(item.title)}
                            </Link>
                        </li>))}
                    <li className="language-li">
                        {i18n.language === 'en'
                            ? (<button className="language_btn" onClick={() => changeLanguage('ka')}>ENG</button>)
                            : (<button className="language_btn" onClick={() => changeLanguage('en')}>ქარ</button>)
                        }
                    </li>
                    <li className="theme-li">
                        <Switch
                            unCheckedChildren={<div className="dark-moon"></div>}
                            checked={themeStatus}
                            onChange={switchTheme}
                            aria-label="Switch Theme"
                        />
                    </li>
                    <li className="menu-button-li">
                        <Button className="ant-button-drawer" type="primary" aria-label="Toggle Menu" onClick={openCloseDrawer}>
                            {[...Array(3)].map((_, index) => (
                                theme === 'dark-theme'
                                    ? <hr key={index} style={{backgroundColor: "#e2e2e2"}} className="hr"/>
                                    : <hr key={index} style={{backgroundColor: "#515359"}} className="hr"/>
                            ))}
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;