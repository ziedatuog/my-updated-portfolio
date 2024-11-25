  
// import './App.scss';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Home from './containers/home';
// import About from './containers/about';
// import Contact from './containers/contact';
// import Portfolio from './containers/portfolio';
// import Skills from './containers/skills';
// import Resume from './containers/resume'; 
// import Navbar from './components/navBar';
 
// import ParticlesComponent from './utils/particles';

// function App() {

//   const location = useLocation()
   
//   return (
//     <div className="App">
//       {location.pathname === '/' && <ParticlesComponent id="particles"   />}
//       <Navbar />

//       {/* main page content */}
//       <div className='App__main-page-content'>
//       <Routes>
//         <Route index path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//       </div>
      
//     </div>
//   );
// }

// export default App;



import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
// import Particles from '@tsparticles/react'
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
// import particles from "./utils.js/particles";
import particles from "./utils/particles";


function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;