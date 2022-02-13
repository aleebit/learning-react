import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>
      Hello World
      </h1>


      <h1>
       Hello Larry 
      </h1>

      <Greeting 
      name='Larry'
      favoriteNumber={10}
      favoriteColors={["red", "blue", "green", "red"]}
      />
      <Greeting 
      name='Curly'
      favoriteNumber={20}
      />
      <Greeting 
      name='Moe'
      favoriteNumber={30}
      />


    </>

  );
}

export default App;
