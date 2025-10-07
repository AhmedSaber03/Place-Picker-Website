import { useEffect, useState } from 'react';

export default function ProgressBar ({ Timer }) {
  const [ remainingTime, setRemainingTime ] = useState(Timer);

  useEffect(() => {
  const interval = setInterval(() => {
    console.log('remainingTime', remainingTime);
    
    setRemainingTime((prevTime) => prevTime - 10);
  }, 10);
  return () => {clearInterval(interval)};
  }, []);

  return <progress value={remainingTime} max={Timer} />
};