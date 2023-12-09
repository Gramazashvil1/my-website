import "./Profile.scss"
import profile_image from '../../assets/images/profile_img.png'
import el_1 from '../../assets/images/el_1.png'
import download_arrow from '../../assets/images/download_arrow.svg'
import linkedin_img from '../../assets/images/linkedin_img.svg'
import mail_img from '../../assets/images/mail_img.svg'
import github_img from '../../assets/images/github_img.svg'
import phone_img from '../../assets/images/phone_img.svg'


function Profile() {
    return (
        <div className="profile">
            <div className="profile-main">
                <div className="profile-inner-left">

                    <h1>
                        <p>გამარჯობა</p> მე ვარ გოგა რამაზაშვილი <p className="profile-blue ">ფრონტენდ დეველოპერი</p>
                    </h1>

                    <p className="profile-text">
                        Lorem ipsum dolor sit amet, consequatur dolorem ea earum eos error eveniet illum ipsa
                        consectetur adipisicing elit. Asperiores aspernatur, blanditiis
                        consequatur dolorem ea earum eos error eveniet illum ipsa ipsam laboriosam maiores nam.
                    </p>

                    <div className="buttons">
                        <button className="profile-button1">
                            დამიკავშირდი
                        </button>
                        <button className="profile-button2">
                            <img src={download_arrow} alt={'Download'}/>
                            CV გადმოწერა
                        </button>
                    </div>

                    <img className="profile-element" src={el_1} alt={''}/>

                </div>
                <div className="profile-inner-right">

                    <div className="profile-image-frame">
                        <img src={profile_image} alt={'ME'}/>
                    </div>

                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={linkedin_img} alt={'Linkedin'}/>
                        </div>
                        <div className="contact-item">
                            <img src={mail_img} alt={'Mail'}/>
                        </div>
                        <div className="contact-item">
                            <img src={github_img} alt={'Github'}/>
                        </div>
                        <div className="contact-item">
                            <img src={phone_img} alt={'Phone'}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;