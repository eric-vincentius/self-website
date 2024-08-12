import gmail from './Library/gmail.png';
import instagram from './Library/instagram.png'
import linkedin from './Library/linkedin.png'
import tiktok from './Library/tiktok.png'
import youtube from './Library/youtube.png'

function Footer({darkMode, changeMode}) {
    return (
        <div className="footer" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.685)" : "rgba(255, 255, 79, 0.712)"}}>
            <div className="left-footer">

            </div>
            <div className="right-footer">
                <div>
                    <h4 style={{ color: darkMode ? "white" : "black"}}>Find Me</h4>
                </div>
                <a href="https://www.instagram.com/eric.vj14"><img alt="instagram" src={instagram}></img></a>
                <a href="https://www.linkedin.com/in/eric-vincentius-jaolis-48815a25a"><img alt="linkedin" src={linkedin}></img></a>
                <a href="https://www.tiktok.com/@evcode5"><img alt="tiktok" src={tiktok}></img></a>
                <a href="https://www.youtube.com/channel/UC5KfwTM6vrjQrZVqaHthCrg"><img alt="youtube" src={youtube}></img></a>
            </div>
        </div>
    )
}

export default Footer;