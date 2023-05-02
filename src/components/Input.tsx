import React from "react"

type InputProps = {
  value: string
  hanleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  return <input type='text' value={props.value} onChange={props.hanleChange} />
}