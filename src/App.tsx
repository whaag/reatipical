import './App.css';
import { Welcome } from './components/Welcome';
import { ActionableItems, item } from './components/ActionableItems'; 
import { Heads } from './components/Heads';
import { Sponser } from './components/Sponser';

function App() {
  const directives: item[] = [
    {
      id: 1,
      name: 'kill all humans',
    },
    {
      id: 2,
      name: 'buy some pizza',
    },
    {
      id: 3,
      name: 'praise the machine overlords',
    },
  ]
  return (
    <div className="App">
      <Welcome userType='Human' actionableItems={26} isLoggedIn={true} />
      <ActionableItems items={directives} />
      <Heads>Juca Bala</Heads>
      <Sponser>
        <Heads>Inside the yode</Heads>
      </Sponser>
    </div>
  );
}

export default App;
