import Header from './components/Header';

import Navigation from './components/Navigation'
import About from './components/About';
import Portfolio from './components/Portfolio';

import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="App">
     <Header />
     <Navigation />
     <main>
      <About />
      <Portfolio />
      <ContactForm />
     </main>
    </div>
  );
}

export default App;
