import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { QandA } from "../components/QandA";
import { Resume } from '../components/Resume';
import { AboutBanner } from "../components/AboutBanner";

export default function AboutPage(){
    return(
        <div className="aboutPage">
            <NavBar />
            <AboutBanner />
            <QandA />
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    )
}