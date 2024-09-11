import { useContext, useEffect } from "react";
import SetPomodoro from "./components/SetPomodoro";
import Title from "./components/Title";
import { SettingContext } from "./context/SettingContext";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingContext);

  useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div className="container flex flex-col justify-center items-center mx-auto h-screen">
      <Title />
      {pomodoro !== 0 ? (
        <>
          <ul className="navbar flex-2 gap-x-4 items-center justify-around w-72 flex ">
            <li>
              <Button
                title={"Work"}
                activeClass={executing.active === "work" && "active-label"}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title={"Short Break"}
                activeClass={executing.active === "short" && "active-label"}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title={"Long Break"}
                activeClass={executing.active === "long" && "active-label"}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title={"Settings"} _callback={SettingBtn} />
          <div>
            <div>
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div>
            <Button
              title={"Start"}
              className={!startAnimate && "active"}
              _callback={startTimer}
            />
            <Button
              title={"Pause"}
              className={!startAnimate && "active"}
              _callback={pauseTimer}
            />
            {/* <Button title={'Stop'}  className={!startAnimate && 'active'} _callback={stopTimer}/> */}
          </div>
        </>
      ) : (
        <SetPomodoro />
      )}
    </div>
  );
}

export default App;
