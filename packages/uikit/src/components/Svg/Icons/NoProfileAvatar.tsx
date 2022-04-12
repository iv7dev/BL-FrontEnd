import React from "react";
// import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  // const theme = useTheme();
  // const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  // const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx={32} cy={32} r={32} fill="url(#paint0_linear_10493)" />
      <image href="/logo.png" width="32" />
    </Svg>
  );
};

export default Icon;
