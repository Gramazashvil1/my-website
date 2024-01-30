import "./Preloader.scss"
import {Spin} from "antd";
import {useEffect, useState} from "react";

function Preloader() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        function handleLoad() {
            setTimeout(() => {
                setIsLoading(false);
            }, 100);
        }

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <>
            <div className={`preloader ${isLoading ? '' : 'fade-out'}`}>
                <Spin size="large"/>
            </div>
        </>
    );
}

export default Preloader;