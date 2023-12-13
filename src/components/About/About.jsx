import "./About.scss"
import about_img from '../../assets/images/about_img.png'
function About() {
    return (
        <div className="about">
            <div className="about-main">

                <div className="about-img-frame">
                    <img src={about_img} alt="about me"/>
                </div>

                <div className="about_right">
                    <p className="about_title">ABOUT ME</p>
                    <p className="about_text">
                        consectetur adipisicing elit. Dolor earum neque pariatur quisquam soluta! Dignissimos enim
                        libero non velit voluptates. Commodi doloremque expedita nihil numquam quia. Ab accusamus
                        aliquid architecto corporis cum cupiditate deserunt dolore ducimus ea eaque earum eius esse
                        explicabo, facilis fuga hic illum ipsam maiores minima modi molestias, mollitia necessitatibus
                        nemo neque nisi nobis odio odit officia omnis perferendis placeat possimus provident ratione
                        suscipit ullam veniam voluptates.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;