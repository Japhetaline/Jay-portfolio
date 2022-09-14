import Navbar from './component/Navbar/navbar';
import Header from './component/Header/header';
import About from './component/About/about';
import Skills from './component/Skills/skills';
import Services from './component/Services/Services'
import Contact from './component/Contact/contact';
import Footer from './component/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
