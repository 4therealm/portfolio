import Header from './components/Header';
import './App.css';
import Navigation from './components/Navigation'
import About from './components/About';

function App() {
  return (
    <div className="App">
     <Header />
     <Navigation />
     <main>
      <About />
     </main>
    </div>
  );
}

export default App;
