import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homepage';
import AboutPage from './pages/about';
import { NoPage } from './pages/NoPage'
import { VirtualTour } from './pages/VirtualTour';
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/home" element = {<HomePage />} />
        <Route path = "/about" element = {<AboutPage />} />
        <Route path = "/virtualtour" element = {<VirtualTour />} />
        <Route path = "*" element = {<NoPage/>} />
      </Routes>
    </div>
  );
}