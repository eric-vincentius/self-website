import selfPhoto2 from './Library/selfPhoto2.png'

function AboutMe({darkMode, changeMode}) {
    return (
        <div id="aboutMe" className="about-me" style={{ backgroundColor: darkMode ? "rgba(26, 26, 26, 0.2)" : "rgba(255, 255, 79, 0.1)"}}>
        <img alt="eric-photo" src={selfPhoto2}></img>
        <div className="about-me-space"></div>
        <div className="biodata">
          <h2>ABOUT ME</h2>
          <p>As an information systems undergraduate student at ITS, I've been developing experiences in various computer science subjects, which are data science and machine learning, algorithms, and full-stack software development. I've joined various trainings, built projects, and done lots of collaboration in organizations. Interested in building innovative cutting-edge technological products that contribute greatly to the society through research, works, projects, and business.</p>
        </div>
      </div>
    )
}

export default AboutMe;