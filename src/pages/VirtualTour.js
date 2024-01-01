import { NavBar } from "../components/NavBar";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { VirtualTourComp } from "../components/VirtualTour";

export const VirtualTour = () => {
    return(
        <div className="VirtualTour">
            <NavBar />
            <VirtualTourComp />
            <Contact/>
            <Footer/>
        </div>
    )
}