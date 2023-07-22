
import { BsTwitter,BsWhatsapp,BsFacebook,BsTelegram,BsInstagram,BsGithub} from "react-icons/bs";

export function Social(){
    return (
        <section className="social-container">
            <div className="socials">
                <ul>
                    <div>
                        <li className="li-twitter">
                            <a href="#">
                                <span className="twitter"><BsTwitter/></span>
                            </a>
                        
                        </li>
                    </div>
                    <div>
                    <li className="li-whatsapp">
                        <a href="#">
                            
                            <span className="whatsapp"><BsWhatsapp/></span>
                            
                        </a>
                    </li>
                    </div>
                    <div>
                    <li className="li-facebook">
                        <a href="#">
                            
                            <span className="facebook"><BsFacebook/></span>
                            
                        </a>
                    </li>
                    </div>
                    <div>
                    <li className="li-telegram">
                        <a href="#">
                            
                            <span className="telegram" ><BsTelegram/></span>
                            
                        </a>
                    </li>
                    </div>
                    <div>
                    <li className="li-instagram">
                        <a href="#">
                            
                            <span className="instagram"><BsInstagram/></span>
                            
                        </a>
                    </li>
                    </div>
                    <div>
                    <li className="li-github">
                        <a href="#">
                            
                            <span className="github"><BsGithub/></span>
                            
                        </a>
                    </li>
                    </div>
                </ul>
            </div>
        </section>
    )
}