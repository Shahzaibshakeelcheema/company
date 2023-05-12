import React from "react";
import "./Style.css";


function TopBar() {
  return (
    <div>
      <div><header className="topHead">
      <ul className="bhead">
        <span> 28 Calverley Moor Avenue Leeds West Yorkshire LS28 8EL</span>
        {/* <img className="bheadlogo" src="clock.png" type="icon" alt="Clocklogo" />*/}
        <span> Mon - Fri 9.00 - 6.00 </span>
      </ul>
    </header></div>
    </div>
  );
}

export default TopBar;
