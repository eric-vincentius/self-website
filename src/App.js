import './App.css';
import Header from './Header.js';
import selfPhoto2 from './Library/selfPhoto2.png'
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
import Favourites from './Favourites.js'
import Portofolio from './Portofolio.js'
import Message from './Message.js'
import Footer from './Footer.js'
import React, {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
      setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} changeMode={changeMode}/>
      <AboutMe darkMode={darkMode} changeMode={changeMode}/>
      <Favourites darkMode={darkMode} changeMode={changeMode}/>
      <Portofolio darkMode={darkMode} changeMode={changeMode}/>
      <Message darkMode={darkMode} changeMode={changeMode}/>
      <Footer darkMode={darkMode} changeMode={changeMode}/>
    </div>
  );
}

export default App;
