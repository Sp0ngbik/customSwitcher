import { useState } from "react";
import style from "./style.module.scss";
function App() {
  const [switcher, setSwither] = useState(false);
  return (
    <div
      className={switcher ? style.switcherBlockBody : style.switcherDarkBody}
    >
      <div>
        <div className={style.cloudStyle}></div>
        <div className={style.switcherWay}>
          <button
            className={style.buttonForClick}
            onClick={() => {
              setSwither(!switcher);
            }}
          ></button>
          <div
            className={
              switcher ? style.startMoveStartElement : style.startElement
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
