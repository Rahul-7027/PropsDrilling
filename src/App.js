import './App.css';
import About from './component/ContextApi/About';
import Home from './component/ContextApi/Home';
import Services from './component/ContextApi/Services';

function App() {
  return (
    <div className="App">
        <Home />
        <About/>
        <Services/>
    </div>
  );
}

export default App;
