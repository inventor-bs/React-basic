import logo from './logo.svg';
import './App.scss';
// import Test from './Examples/Test';
import FormReact from './Examples/FormReact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Test></Test> */}
        <FormReact></FormReact>
      </header>
    </div>
  );
}

export default App;
