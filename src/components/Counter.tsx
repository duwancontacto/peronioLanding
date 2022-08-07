import React from "react";
import counter from "../assets/images/counter.png";

interface props {
  counterNumber: number;
  activeBlack?: boolean;
}

export default function Counter({
  counterNumber = 1,
  activeBlack = false,
}: props) {
  return (
    <div className="counter">
      <div
        className="counterText"
        style={{color: activeBlack ? "#3d3333" : "white"}}
      >
        {counterNumber}
      </div>

      <div className="card">
        <div className="percent">
          <svg>
            <circle cx="50" cy="50" r="45"></circle>
            <circle
              cx="50"
              cy="50"
              r="45"
              style={{
                strokeDashoffset: `calc(360px - ${4.7 * counterNumber}px)`,
              }}
            ></circle>
          </svg>
        </div>
      </div>

      <img src={counter} alt="DownloadReloj" className="navIconReloj" />
    </div>
  );
}