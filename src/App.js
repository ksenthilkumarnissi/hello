import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <h1>Hello Jesus World - React with NodeJS</h1>
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
       <div>
        <Welcome name="Sara" color="red"/>
        <Welcome name="Cahal" color="blue" />
        <Welcome name="Edite" color="yellow"/>
      </div>
    </div>
    
  );
}

class Hello extends React.Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                <h1>Hello World</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
              </header>
              <body className="App-body">
                Welcome To Java
              </body>
            </div>
            
      );
  }
}

export default App;
render(<Hello />, document.getElementById('child_1'));

function tick() {
  const element = (
      <header className="App-header">
        <h1>Hello, world!</h1>
        <div><h2>It is {new Date().toLocaleTimeString()}.</h2></div>
      </header>
  );
  
  ReactDOM.render(element, document.getElementById('child_2'));
}

setInterval(tick, 1000);



function formName() {
  const element = (
    <div>
        <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
  );

  ReactDOM.render(element, document.getElementById('child_3'));

}


setInterval(formName, 2222000);

class Welcome extends React.Component {
  render() {
    return <h1>Hello, <font color={this.props.color}> {this.props.name} </font></h1>;
  }
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('child_4')
);
