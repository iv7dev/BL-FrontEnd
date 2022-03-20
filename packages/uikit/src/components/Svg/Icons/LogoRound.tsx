import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 97 97" {...props}>
      <circle cx={48} cy={48} r={48} fill="url(#paint0_linear_10493)" />
      <image href="/logo.png" width="92" />
      <defs>
        <linearGradient id="paint0_linear_10493" x1={48} y1={0} x2={48} y2={96} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6F0FF" />
          <stop offset={1} stopColor="#F6F0FF" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
