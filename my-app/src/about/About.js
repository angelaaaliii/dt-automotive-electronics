import './About.css';
import porsche from './/imgs/porsche.png';

export default function About() {
  return (
    <div id="about">
      <div id="about-imgs">
        <img id="about-pic" src={porsche} alt="Picture of Porsche" width="500" height="600"/>        
      </div>

      {/* <div id="about-info">
        <div id="color-box">
          <h1 id="hello">Hello! I'm Angela:</h1>
          <h2 id = "branding">software engineer</h2>
        </div>
        <br></br>
        <p>
          I'm a senior at <a id="link" href="https://www.brown.edu/" target="_blank">Brown University</a>, 
          studying Computer Science & Applied Mathematics with 
          a focus on software principles and systems.
        </p>
        <br></br>
        <p>This summer I will be a software engineering intern at <a id="link" href="https://www.microsoft.com/en-us/" target="_blank">Microsoft</a>, 
          working on Azure Core under Storage Repair.
        </p>
        <p>Previously, I have been a software engineering intern at <a id="link" href="https://www.rtx.com/" target="_blank">Raytheon 
          Technologies</a> working within the aerospace survivability discipline group.
        </p>
        <br></br>
        <p>In my free time, I'm either <a id="link" href="https://www.instagram.com/birbsatbrown/?hl=en" target="_blank">crocheting</a>, 
        running, reading, or exploring national parks!</p>
          <br></br>
          <p>You can find me here: </p>

          <div id="socials">
            <a href="https://github.com/angelaaaliii">
            <img src={github} alt="GitHub logo that links to Angela's GitHub profile" width="30px"></img></a>

            <a href="https://www.linkedin.com/in/angelaaa-liii/">
            <img src={linkedin} alt="LinkedIn logo that links to Angela's LinkedIn profile" width="50px"></img></a>

            <a href= "mailto: angelali2021@gmail.com"> 
            <img src={email} alt="Email icon that links to Angela's email address" width="50px"></img>
            </a>

          </div>
      </div> */}
    </div>
  );
}
