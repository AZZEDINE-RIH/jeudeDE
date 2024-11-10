import logo from './logo.svg';
import './App.css';
import JeuDEfunction from './JeuDEfunction';

function App() {
  return (
    <div className="App">
     {/* <JeuDe /> */}
     <JeuDEfunction cache={2} />
    </div>
  );
}

export default App;
