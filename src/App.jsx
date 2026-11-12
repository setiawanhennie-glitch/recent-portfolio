import "./components/hero/Hero";
import "./components/services/Services";
import "./components/contact/Contact";
import "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div className=''>Hello World
      <Hero />
      <Services /> 
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App