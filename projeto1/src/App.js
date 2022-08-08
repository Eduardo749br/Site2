import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component{
  //criação dos estudos da classe
  state = {
    name: 'Eduardo Mota Araújo',
    cont: 0
  }

  mudaNome = () => {
    this.setState({name: 'José', cont: 0})
  }

  incrementa = () => {
    const {cont} = this.state;
    this.setState({cont: cont + 1})
  }

  decrementa = () => {
    const {cont} = this.state;
    this.setState({cont: cont -1})
  }

  render (){
    const {name, cont} = this.state; //Atribuição via desestruturação

    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick={this.mudaNome}>
                {name} {cont}
              </p>

              <p onClick={this.incrementa}>
                Valor +
              </p>

              <p onClick={this.decrementa}> 
                Valor -
              </p>

              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Darixa
              </a>   
            </header> 
          </div>
        );
  }
}

// function App() {
//   return (
//     <div className="teste">
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           FLAMENGO EM 81 GABIGOL DESTRO
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//           <div className="minhaDiv"></div>
//           <p> Minha própria Div</p>
        
//       </header>
     
//     </div>

//     </div>
//   );
// }

export default App;
