import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function HomePage(){
    return(
        <div>
            <NavBar />
            <Banner/>
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}