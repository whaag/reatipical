import './App.css';
import { Welcome } from './components/Welcome';
import { ActionableItems, item } from './components/ActionableItems'; 
import { Heads } from './components/Heads';
import { Sponser } from './components/Sponser';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { StateTest } from './components/StateTest';
import { LoggedIn } from './components/LoggedIn';
import { Counter } from './components/Counter';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';

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
      <Button
        handleClick={(event, id) => {
          console.log('buttono cricodo', event, id)
        }}
      />
      <Input value='' hanleChange={(event) => console.log(event)} />
      <Container styles={{
        border: '5px solid red',
        padding: '1rem'
      }}></Container>
      <hr />
      <StateTest />
      <hr />
      <LoggedIn />
      {/* <User /> */}
      <hr />
      <Counter />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <hr />
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
