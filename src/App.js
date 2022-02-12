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

      <Greeting name='Larry'/>
      <Greeting name='Curly'/>
      <Greeting name='Moe'/>
      <Greeting />
      <Greeting />
      <Greeting></Greeting>

    </>

  );
}

export default App;
