import { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputReference = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    inputReference.current?.focus()
  }, []);

  return(
    <div>
      <input type='text' ref={inputReference} />
      <button onClick={() => console.log(inputReference.current?.value)}>bbubu</button>
    </div>
  )
};