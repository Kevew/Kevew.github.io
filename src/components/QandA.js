import '../css/QandA.css';
import React from 'react';
import botanicalImg from '../assets/img/BotanicalRumble.jpg';
import InstructorCaption from '../assets/img/2022Instructor.jpg';
import VVPhoto from '../assets/img/VVPhoto.png';
import CCCResultCaption from '../assets/img/CCCResultCaption.jpg';
import ClubPhoto from '../assets/img/ClubPhoto.png';
import ClubPhoto2 from '../assets/img/ClubContest.jpg';
import NokiaWorkSpace from '../assets/img/WorkSpace.jpg'

export class QandA extends React.Component{

    constructor(){
        super()
        this.FAQOpen = [];
    }
    
    openFAQ = (id) => {
        this.FAQOpen[id].classList.toggle("active");
    };

    componentDidMount() {
        this.FAQOpen = document.querySelectorAll(".FAQdiv")
    }

    render(){
        return(
            <div class="FAQ">

                <div onClick={() => this.openFAQ(0)} class="FAQdiv">
                    
                    <div class="question">
                        <h3>Date of Birth</h3>

                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            December 21, 2005
                        </p>
                    </div>
                </div>

                <div onClick={() => this.openFAQ(1)} class="FAQdiv">
                    
                    <div class="question">
                        <h3>How did I Discover Coding?</h3>

                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            I originally started coding by coming across a <a href="https://www.youtube.com/watch?v=K5F-aGDIYaM&list=PL6gx4Cwl9DGAjkwJocj7vlc_mFU-4wXJq">Youtube 
                            Series</a> on the Python programming language. 
                            Following the tutorial, I developed my first game, a simplistic 2D snake game completely developed in Python.
                        </p>
                    </div>
                </div>

                <div onClick={() => this.openFAQ(2)} class="FAQdiv">
                    
                    <div class="question">
                        <h3>My Experience At Virtual Ventures (First Job)</h3>

                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            In 2017, I enrolled in a program at Carleton University called <a href="https://carleton.ca/vv/clubprojects/" target="_blank">Intermediate Engineering Design Studio (Grades 7-12)</a>
                            . Its goal was to make students experience the full software development lifestyle that comes with any tech project. Here are two of my favorite projects&nbsp;
                            <a href="https://docs.google.com/presentation/d/1A2erx_96anwyrVEBjN2hmZiu5Holr6Tvqioauukw2PY/edit?usp=sharing" target="_blank">Bubble Shooter</a> or&nbsp;
                            <a href="https://docs.google.com/presentation/d/1R0L7FRoSW0pJyYyXSvn9eZYlKWU6jrrgWlblBRTnbBQ/edit?usp=sharing" target="_blank">Botanical Rumble</a>.
                        </p>
                        <img src={botanicalImg} alt="ProjectImg"></img>
                        <p>
                            From 2021 to the present, I transitioned away from being a club member at Virtual Ventures. 
                            I first volunteered, acquiring the 40 hours necessary to graduate, before volunteering another 90 hours because I loved the program. 
                            Seeing my enthusiasm, I was promoted to being an Instructor where I help coordinate and help fellow students. 
                            During the Summer of 2022, I acquired a full-time position as a STEM instructor where I dealt with kids from kindergarten to high school. 
                            It was one of the best experiences I ever had!
                        </p>
                        <img src={InstructorCaption} alt="InstructorImg"/>
                        <img src={VVPhoto} alt="InstructorImg"/>
                    </div>
                </div>

                <div onClick={() => this.openFAQ(3)} class="FAQdiv">
                    
                    <div class="question">
                        <h3>Competitive Programming (Waterloo CCC and Founder of School Club)</h3>

                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            I loved the logical and problem-solving aspects of Competitive Programming and have since solved hundreds of problems on sites such as Codeforces and Atcoder. 
                            During this time, my biggest goal was to enter the honor roll of the CCC Contest. A nationwide competition in Canada designed specifically for Competitive Programming.
                            In 2022, I achieved such a goal by entering Group 3 of the Senior Contest with a score of 45 (Top 3% in Canada).
                            I then did it again, when I entered Group 3 of the Senior Contest with a score of 48 for the 2023 Competition (Top 3% in Canada).
                            
                        </p>
                        <img src={CCCResultCaption} alt="CCCResults"></img>
                        <p>
                            Seeing how niche the topic was I and a friend co-founded Earl of March's Competitive Programming Club. 
                            We do weekly discussions on competitive programming problems and algorithms. 
                            We also simulate virtual contests and compete against each other for fun.
                        </p>
                        <img src={ClubPhoto} alt="ClubPhoto1"></img>
                        <img src={ClubPhoto2} alt="ClubPhoto2"></img>
                    </div>
                </div>


                <div onClick={() => this.openFAQ(4)} class="FAQdiv">
                    
                    <div class="question">
                        <h3>Nokia(Co-Op)</h3>

                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            This was one of my favourite experiences where I received the full professional experience in Software Development.
                            Although my role was orignally for Network and Software Installation, my passion for Software Development convinced my supervisor(Ivan) to change up my duties.
                        </p>
                        <p>
                            During my time at Nokia, I worked on an internal Order Tracking Website where I gained experience as a full-stack developer. 
                            My biggest task was possibly overhauling the email system allowing for detailed information of every change to be recorded.
                            Another important lesson I learned was the readability and efficiency of the code I write. 
                            Code reviews and testing were a must which helped me develop my problem-solving skills better.
                        </p>

                        <img src={NokiaWorkSpace} alt="NokiaWorkSpace"></img>
                        <p>
                            A photo of my workspace at Nokia
                        </p>
                        
                    </div>
                </div>

                <div onClick={() => this.openFAQ(5)} class="FAQdiv">
                    
                    <div class="question">
                        <h3>Pluto E-Learning</h3>

                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            Wanting to gain more experience in web dev, I've joined UTM Enactus Club where I've been collaborating with other members towards developing a financial learning website.
                            Previous, my web dev experience has been working on already existing projects. This opportunity allows me to build one from the ground up.
                            I've noticed quite a lot of similarities between Vue and React which has made my learning experience quite better.
                        </p>
                    </div>
                </div>


                <div onClick={() => this.openFAQ(6)} class="FAQdiv">
                    
                    <div class="question">
                        <h3>Lean Math Prover</h3>

                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="answer">
                        <p>
                            The newest field of Computer Science I've been interested in has been the formalization of Mathematics using Computer Science.
                            I've been exploring the possibilities of Lean Proof Assistant in solving Mathematical Statements such as the definition of a limit.
                            My current project is attempting to create something similar to the&nbsp;
                            <a href="https://adam.math.hhu.de/">Natural Number Game</a> but with a focus on Calculas.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}