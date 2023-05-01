import './ActionableItems.css';

export type item = {
  id: number,
  name: string,
}

type ActionableItemsProps = {
  items: item[],
}

export const ActionableItems = (props: ActionableItemsProps) => {
  return (
    <div className="List">
      <ul>
        {props.items.map(item => {
          return (
            <li key={item.id}>
              Item {item.id} - {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}