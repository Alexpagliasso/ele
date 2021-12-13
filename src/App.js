import logo from './logo.svg';
import './App.css';
import DataAtlete from './form/DataAtlete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <DataAtlete />
      </div>
    </div>
  );
}

export default App;
