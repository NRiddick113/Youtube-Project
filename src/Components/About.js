import React from 'react';
import './About.css'

function About() {
    return (
        <div className='about' >
            <p>This YouTube Clone project uses the YouTube API data to mimic YouTube's functionality.  On this application, you will be able to search videos by keyword, view selected videos and leave comments.  Happy viewing!</p>
            <div className='developers'>
            <div className='Kylie'>
            <p>Hi, my name is Kylie! I am a Pursuit fellow building upon skills to become a full stack web developer. Outside of technology, I am also passionate about animals and healthcare, which has led me on a path within the veterinary field. I also love travelling and going to music festivals. My love for music and its ability to unite groups of people makes me appreciate applications such as YouTube for making it so widely accessible. </p>
            <p>Please follow my other work on <a href='https://github.com/Kylie-Lang1'>GitHub</a></p>
            </div>
            <div className='Natasha'>
            <img src='./Natasha.jpg' alt='Natasha'></img>
            <p>Hi, my name is Natasha! I'm a Full Stack Software Engineer with experience in Node.js, React, HTML5, CSS, Jest, Git, npm and JavaScript. I am currently enrolled in Pursuit to learn and gain more skill in being a Full Stack Software Engineer. I created website in the Front End using HTML5 and React. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS.I love to listen to music, hang out with family, and find new escape room/ puzzles in New York City.</p>
            <p>Please follow my other work on <a href='https://github.com/Nriddick113'>GitHub</a>. Also you can connected with me on <a href='https://www.linkedin.com/in/natasha-riddick/'>Linkedin</a></p>
            </div>
            </div>
        </div>
    );
}

export default About;