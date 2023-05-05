type StateTestListProps = {
  name: string[],
}

export const StateTestList = (props: StateTestListProps) => {
  return (
    <div>
      <ul>
        {props.name.map(name => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}