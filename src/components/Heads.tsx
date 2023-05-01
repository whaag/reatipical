type HeadsProps = {
  children: string
}
export const Heads = (props: HeadsProps) => {
  return <h2>{props.children}</h2>
}