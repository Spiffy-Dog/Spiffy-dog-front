import logo from './logo.svg';
import './App.css';
import Products from '../src/Components/Products/Products';
import sviter from '../src/Components/Products/sviter.json';
import dozdevik from '../src/Components/Products/dozdevik.json';

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <Products sviters={sviter} dozdeviks={dozdevik} />
    </>
  );
}

export default App;
