import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
