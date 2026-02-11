import Header from './components/Header';
import Hero from './components/Hero';
import Compliance from './components/Compliance';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ServicesPage from './components/ServicesPage';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Compliance />
        <Services />
        <AboutUs />
        <ServicesPage />
        <Projects />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
