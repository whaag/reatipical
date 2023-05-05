import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";
import { StateTestList } from "./StateTestList";

export const StateTest = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(new Array<string>());
  
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>State Test</h1>
      <input type="text" value={name} onChange={onChangeInput}/><button onClick={event => {
        let pers = people;
        pers.push(name);
        setPeople(pers);
      }}>submit</button>
      <button onClick={e => console.log(people)}>juca</button>
      <StateTestList name={people} />
    </div>
  )
}