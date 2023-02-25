import Header from './components/Header';

import Navigation from './components/Navigation'
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
     <Header />
     <Navigation />
     <main>
      <About />
      <Portfolio />
     </main>
    </div>
  );
}

export default App;
