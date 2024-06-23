import './App.css';
import Hero from './componenets/Hero';
import  Navbar from './componenets/Navbar'
import About from './componenets/About';
import Project from './componenets/Project';
import Resume from './componenets/Resume';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;