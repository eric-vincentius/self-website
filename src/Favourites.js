import programming from './Library/programming.jpg'
import music from './Library/music.jpg'
import design from './Library/3d_design.jpg'
import cooking from './Library/cooking.jpg'
import demonSlayer from './Library/demon_slayer.jpg'
import aot from './Library/aot.jpg'
import spyxfamily from './Library/spyxfamily.jpg'
import iceCream from './Library/ice-cream.jpg'
import pizza from './Library/pizza.jpg'
import noodle from './Library/noodle.jpg'
import AboutMe from './AboutMe.js'
import Header from './Header.js'

function Favourites({darkMode, changeMode}) {
    return (
        <div id="favourites" className="favourites" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.685)" : "white"}}>
        <div className="hobbies" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.685)" : "rgb(255, 86, 86)"}}>
          <h2 style={{ color: darkMode ? "white" : "black"}}>HOBBIES</h2>
          <div className="hobbies-fill">
            <div>
              <img alt="programming" src={programming}></img>
              <p style={{ color: darkMode ? "white" : "black"}}>Programming</p>
            </div>
            <div>
              <img alt="music" src={music}></img>
              <p style={{ color: darkMode ? "white" : "black"}}>Music</p>
            </div>
          </div>
          <div className="hobbies-fill">
            <div>
                <img alt="cooking" src={cooking}></img>
                <p style={{ color: darkMode ? "white" : "black"}}>Music</p>
              </div>
              <div>
                <img alt="design" src={design}></img>
                <p style={{ color: darkMode ? "white" : "black"}}>3D Design</p>
              </div>
          </div>
        </div>
        <div className="fav-movies" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.685)" : "rgb(136, 136, 255)"}}>
          <h2 style={{ color: darkMode ? "white" : "black"}}>FAVOURITE MOVIES</h2>
          <div className="movies-fill">
            <div>
              <img alt="demon-slayer" src={demonSlayer}></img>
              <p style={{ color: darkMode ? "white" : "black"}}>Demon Slayer</p>
            </div>
            <div>
              <img alt="attack-on-titan" src={aot}></img>
              <p style={{ color: darkMode ? "white" : "black"}}>Attack On Titan</p>
            </div>
          </div>
        </div>
        <div className="fav-foods" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.685)" : "rgb(115, 255, 115)"}}>
          <h2 style={{ color: darkMode ? "white" : "black"}}>FAVOURITE FOODS</h2>
          <div className="movies-fill">
            <div>
              <img alt="ice-cream" src={iceCream}></img>
              <p style={{ color: darkMode ? "white" : "black"}}>Ice cream</p>
            </div>
            <div>
              <img alt="pizza" src={pizza}></img>
              <p style={{ color: darkMode ? "white" : "black"}}>Pizza</p>
            </div>
          </div>
          <div className="movies-fill">
            <div>
              <img alt="noodle" src={noodle}></img>
              <p style={{ color: darkMode ? "white" : "black"}}>Noodle</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Favourites;