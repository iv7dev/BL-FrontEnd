import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
const Logo: React.FC<LogoProps> = ({ ...props }) => {
  /// const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    // Logo solo de Genesys - en Logo.tsx solamente se carga el SVG
    <Svg viewBox="0 0 1800 340" {...props}>
      <image href="/logotext.png" width="1790" />
    </Svg>
  );
};
export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
