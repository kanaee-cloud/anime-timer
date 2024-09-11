import React, { useContext, useState } from 'react'
import Button from './Button'
import { SettingContext } from '../context/SettingContext'

const SetPomodoro = () => {
  
 

  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: 'work'
  })  

  const handleChange = input => {
    const {name, value} = input.target
    switch (name) {
        case 'work':
            setNewTimer({
                ...newTimer,
                work: parseInt(value)
            })
            break;
           
        case 'shortBreak':    
            setNewTimer({
                ...newTimer,
                short: parseInt(value)
            })
            
            break;

        case 'longBreak':    
            setNewTimer({
                ...newTimer,
                long: parseInt(value)
            })
            
            break;
        default:
            break;
    }
    console.log(newTimer)
  }

  const { updateExecute } = useContext(SettingContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer)
    
  }
  return (
    <div className='p-4 '>
        <form noValidate onSubmit={handleSubmit}>
            <div className='flex items-center gap-x-5'>
                <input className='input p-4 w-20 text-center' name="work" onChange={handleChange} value={newTimer.work} />
                <input className='input p-4 w-20 text-center' name="shortBreak" onChange={handleChange} value={newTimer.short} />
                <input className='input p-4 w-20 text-center' name="longBreak" onChange={handleChange} value={newTimer.long} />
            </div>
            <button type='submit' className='text-sm mt-5 '>Set Timer</button>
        </form>
    </div>
  )
}

export default SetPomodoro