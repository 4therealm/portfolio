import Header from './components/Header';
import { useState } from 'react';
import Navigation from './components/Navigation'
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <Header />
      <Navigation
        setShowAbout={setShowAbout}
        setShowContact={setShowContact}
        setShowPortfolio={setShowPortfolio}
      />
      <main>
        {showAbout && <About />}
        {showPortfolio && <Portfolio />}
        {showContact && <ContactForm />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
