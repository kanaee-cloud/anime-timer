import React, { createContext, useState } from "react";

export const SettingContext = createContext();

const SettingContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true);
  }

  function stopTimer() {
    setStartAnimate(true);
  }

  function pauseTimer() {
    setStartAnimate(false);
  }

  const SettingBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }
  const updateExecute = updatedSettings => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;

      case "short":
        setPomodoro(evaluate.short);
        break;

      case "long":
        setPomodoro(evaluate.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const second = remainingTime % 60;

    return `${minutes}:${second}`;
  };

  function stopAnimate(){
    setStartAnimate(false)
  }
  return (
    <SettingContext.Provider
      value={{
        stopTimer,
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        setCurrentTimer,
        children,
        SettingBtn,
        stopAnimate
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;
