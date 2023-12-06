import "./Header.scss"
import {useEffect, useState} from "react";
import {Button, Drawer, Switch} from "antd";

const menuItems = [
    {id: 1, title: 'HOME'},
    {id: 2, title: 'ABOUT'},
    {id: 3, title: 'SKILLS'},
    {id: 4, title: 'PROJECTS'},
    {id: 5, title: 'CONTACT'},
];

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || localStorage.setItem('theme', 'dark-theme'));
    const [themeStatus, setThemeStatus] = useState(false);
    const [open, setOpen] = useState(false);

    function switchTheme() {
        setTheme((perv) => (perv === 'dark-theme' ? 'light-theme' : 'dark-theme'));
    }

    useEffect(() => {
        document.body.className = theme;
        const headerElement = document.querySelector('header');
        headerElement.className = `header ${theme}`;
        localStorage.setItem('theme', theme);
        setThemeStatus(theme !== 'dark-theme');
    }, [theme]);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <h1>G.R</h1>
                </div>

                <Drawer style={(theme !== 'dark-theme')
                    ? {backgroundColor: "#e2e2e2"}
                    : {backgroundColor: "#2d2f33"}} title="MENU" placement="right" onClose={onClose} open={open}
                >
                    <ul>
                        {menuItems.map((item) => (<li className="ant-drawer-li" key={item.id}>{item.title}</li>))}
                    </ul>
                </Drawer>

                <ul>
                    {menuItems.map((item) => (<li className="main-menu-li" key={item.id}>{item.title}</li>))}
                    <li className="language-li">ENG</li>
                    <li className="theme-li">
                        <Switch
                            unCheckedChildren={<div className="dark-moon"></div>}
                            checked={themeStatus}
                            onChange={switchTheme}
                        />
                    </li>
                    <li className="menu-button-li">
                        <Button className="ant-button-drawer" type="primary" onClick={showDrawer}>
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