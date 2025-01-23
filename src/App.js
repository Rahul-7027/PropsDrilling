import './App.css';
import About from './component/ContextApi/About';
import Home from './component/ContextApi/Home';
import Services from './component/ContextApi/Services';
import CustomHooksDefine from './component/CustomHooks/CustomHooksDefine';

function App() {
  return (
    <div className="App">
        <Home />
        <About/>
        <Services/>
        <CustomHooksDefine/>
    </div>
  );
}

export default App;
