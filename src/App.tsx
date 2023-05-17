import { FC, FormEvent, useState } from 'react';
import { leftPadTime } from './utils';
import { addTimes } from './utils';

import "./reset.css"
import './App.css';
import { Time } from './types';

function App() {
  const [totalTime, setTotalTime] = useState<Time>()
  const [times, setTimes] = useState<Time[]>([])
   
  const hours = totalTime?.hours || 0;
  const minutes = totalTime?.minutes || 0;
  function handleFormSubmit(e: any){
    e.preventDefault();
    console.log(e)
    const hours = parseInt(e.target.hours.value)
    const minutes = parseInt(e.target.minutes.value)
    if (hours <= 0 && minutes <= 0){
      return;
    }

    setTimes([...times, {hours, minutes}]);
    console.log(times)
    setTotalTime(addTimes(times))
  }

  return (
    <div className="app">
      <div className='header'>
        <h1>A-d-d-e-r</h1>
        <p>Let me calculate the total time!</p>
      </div>
      <div className="body">
        <form className='add-time' onSubmit={handleFormSubmit}>
          <input type='number' name='hours' id='hours'/>
          <label htmlFor="hours">h</label>
          <span>:</span>
          <input type='number' name='minutes' id='minutes'/>
          <label htmlFor="minutes">m</label>
          <button type='submit' name='submit'>+</button>
        </form>
        <DynamicList timesArray={times}/>
      </div>
      <div className="footer">
          {`${leftPadTime(hours)} h : ${leftPadTime(minutes)} m`}
      </div>
    </div>
  )
}


function DynamicList(times: {timesArray: Time[]}) {
  const {timesArray} = times;
  return (
    <ul>
      {
        timesArray.map(function (time, index, array) {
          const itemProps = {index: index+1, time}
          return <DynamicListItem {...itemProps}/>
        })
      }
    </ul>
  )
}

type Props = {
  index: number,
  time: Time
}

const DynamicListItem: FC<Props> = (props: Props) =>  {
  const {index, time} = props;
  return (  
    <li> 
      <span>{index}</span>
      <span>{leftPadTime(time.hours)}&nbsp;h</span>
      <span>{leftPadTime(time.minutes)}&nbsp;m</span>  
    </li>
  )
}
export default App
