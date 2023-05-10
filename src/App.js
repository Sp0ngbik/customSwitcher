import { useState } from "react";
import style from "./style.module.scss";
function App() {
  const [switcher, setSwither] = useState(false);
  return (
    <div className={style.switcherBlockBody}>
      <div className={style.switherWay}>
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
        <div
          className={switcher ? style.startMoveEndElement : style.endElement}
        ></div>
      </div>
    </div>
  );
}

export default App;
