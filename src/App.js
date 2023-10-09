import logo from './logo.svg';
import User from './User';
import HomeContainer from './containers/HomeContainer';

import './App.css';


function App() {
  return (
    <div className="App">
      {/* <h1> app component </h1> */}
      {/* <User data = { {name:'amjad ali', age:30, text: 'here its dummy text'} }/> */}
     <HomeContainer /> 
    </div>
  );
}

export default App;
