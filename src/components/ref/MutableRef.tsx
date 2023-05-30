import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalReference = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalReference.current) {
      window.clearInterval(intervalReference.current);
    }
  }

  useEffect(() => {
    intervalReference.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1);
    return () => {
      stopTimer();
    }
  }, []);

  return (
    <div>
      HookTimer - { timer } - 
      <button onClick={() => stopTimer()}>Stop</button>
    </div>
  )
}