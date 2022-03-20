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
    <Svg viewBox="0 0 1900 330" {...props}>
      <style>{".st0{fill:#082f7e}"}</style>
      <path
        className="st0"
        d="M481.47 252.01c-14.55 0-27.94-1.97-40.17-5.92s-22.91-9.56-32.04-16.83-16.25-16.02-21.36-26.23c-5.11-10.22-7.66-21.67-7.66-34.36 0-11.76 2.51-22.67 7.55-32.74 5.03-10.06 12.03-18.81 21.01-26.23 8.97-7.43 19.58-13.23 31.81-17.41 12.22-4.18 25.54-6.27 39.93-6.27 10.06 0 19.85 1.16 29.37 3.48s18.14 5.3 25.88 8.94 13.77 7.78 18.11 12.42l-6.5 9.52c-4.8-4.18-10.84-7.97-18.11-11.38-7.28-3.4-15.13-6.15-23.56-8.24-8.44-2.09-16.68-3.13-24.72-3.13-12.54 0-24.18 1.78-34.94 5.34-10.76 3.56-20.12 8.51-28.09 14.86s-14.13 13.85-18.46 22.52c-4.34 8.67-6.5 18.11-6.5 28.32 0 10.99 2.24 20.89 6.73 29.72 4.49 8.82 10.8 16.37 18.92 22.64 8.13 6.27 17.56 11.07 28.32 14.39 10.75 3.33 22.48 4.99 35.17 4.99 10.83 0 21.09-1.47 30.76-4.41 9.67-2.94 18.18-6.92 25.54-11.96 7.35-5.03 13.12-10.68 17.3-16.95s6.19-12.73 6.04-19.39v-8.82l5.11 7.43h-85.44v-11.38h91.47c.15.62.27 1.67.35 3.13.08 1.47.15 2.94.23 4.41.08 1.47.12 2.75.12 3.83 0 8.36-2.36 16.48-7.08 24.38-4.72 7.89-11.34 14.94-19.85 21.13-8.51 6.19-18.34 11.11-29.49 14.74-11.14 3.64-23.06 5.46-35.75 5.46zM644.91 249.69V87.17H771.9v11.61H656.52v139.3h114.46v11.61H644.91zm6.27-78.01v-11.61h107.49v11.61H651.18zM852.47 249.69V87.17h12.77l147.19 149.98-2.32 6.04c-.16-2.32-.27-6.89-.35-13.7-.08-6.81-.12-14.51-.12-23.1 0-8.59-.04-16.87-.12-24.84s-.12-14.7-.12-20.2c0-5.49-.08-8.32-.23-8.47v-65.7h11.61v162.51h-13.46L861.29 101.1l.93-6.5c0 1.08.04 3.83.12 8.24.08 4.41.19 9.72.35 15.9.15 6.19.35 12.62.58 19.27.23 6.66.42 12.81.58 18.46.15 5.65.23 10.1.23 13.35v79.86l-11.61.01zM1109.93 249.69V87.17h126.99v11.61h-115.39v139.3H1236v11.61h-126.07zm6.27-78.01v-11.61h107.49v11.61H1116.2zM1379.24 252.01c-10.06 0-19.66-1.13-28.79-3.37-9.13-2.24-17.64-5.65-25.54-10.21-7.89-4.56-15.01-10.25-21.36-17.06l6.97-9.75c9.29 9.91 19.81 17.18 31.57 21.82 11.76 4.64 24.07 6.97 36.91 6.97 12.22 0 23.02-1.47 32.39-4.41 9.36-2.94 16.68-7.2 21.94-12.77 5.26-5.57 7.81-12.07 7.66-19.5 0-5.42-1.43-9.83-4.29-13.23-2.87-3.4-6.62-6.11-11.26-8.13-4.64-2.01-9.72-3.6-15.21-4.76-5.49-1.16-10.8-2.05-15.9-2.67-5.11-.62-9.52-1.16-13.23-1.62-8.67-1.39-17.14-2.82-25.42-4.3-8.28-1.47-15.79-3.6-22.52-6.38-6.73-2.79-12.07-6.65-16.02-11.61-3.95-4.95-5.92-11.53-5.92-19.73 0-7.27 1.66-13.73 4.99-19.39 3.33-5.65 8.08-10.41 14.28-14.28 6.19-3.87 13.31-6.77 21.36-8.71 8.05-1.93 16.79-2.9 26.23-2.9 10.22 0 19.46 1.16 27.74 3.48s15.75 5.65 22.4 9.98c6.65 4.34 12.54 9.52 17.65 15.56l-7.66 9.05c-4.8-5.57-10.29-10.33-16.48-14.28s-12.92-6.97-20.2-9.05c-7.28-2.09-15.09-3.13-23.45-3.13-10.06 0-19.19 1.32-27.4 3.95-8.2 2.63-14.74 6.35-19.62 11.14-4.87 4.8-7.31 10.53-7.31 17.18 0 6.19 1.7 11.18 5.11 14.97 3.4 3.8 8.13 6.7 14.16 8.71 6.04 2.01 12.81 3.64 20.32 4.88 7.51 1.24 15.44 2.48 23.8 3.71 7.12.78 14.51 1.82 22.17 3.13 7.66 1.32 14.89 3.33 21.71 6.04 6.81 2.71 12.27 6.66 16.37 11.84 4.1 5.19 6.15 12.34 6.15 21.47s-2.98 17.3-8.94 24.49c-5.96 7.2-14.48 12.81-25.54 16.83-11.07 4.02-24.34 6.04-39.82 6.04zM1584.01 249.69V181.2l2.55 10.68-85.2-104.71h16.25l73.83 92.17-3.25.23 70.58-92.4h14.63l-80.79 104.47 2.79-12.3v70.35h-11.39zM1795.97 252.01c-10.06 0-19.66-1.13-28.79-3.37-9.13-2.24-17.64-5.65-25.54-10.21-7.89-4.56-15.01-10.25-21.36-17.06l6.97-9.75c9.29 9.91 19.81 17.18 31.57 21.82 11.76 4.64 24.06 6.97 36.91 6.97 12.22 0 23.02-1.47 32.39-4.41 9.36-2.94 16.68-7.2 21.94-12.77 5.26-5.57 7.81-12.07 7.66-19.5 0-5.42-1.43-9.83-4.29-13.23-2.87-3.4-6.62-6.11-11.26-8.13-4.64-2.01-9.72-3.6-15.21-4.76-5.49-1.16-10.8-2.05-15.9-2.67-5.11-.62-9.52-1.16-13.23-1.62-8.67-1.39-17.14-2.82-25.42-4.3-8.28-1.47-15.79-3.6-22.52-6.38-6.73-2.79-12.07-6.65-16.02-11.61-3.95-4.95-5.92-11.53-5.92-19.73 0-7.27 1.66-13.73 4.99-19.39 3.33-5.65 8.08-10.41 14.28-14.28 6.19-3.87 13.31-6.77 21.36-8.71 8.05-1.93 16.79-2.9 26.23-2.9 10.22 0 19.46 1.16 27.74 3.48s15.75 5.65 22.4 9.98c6.65 4.34 12.54 9.52 17.65 15.56l-7.66 9.05c-4.8-5.57-10.29-10.33-16.48-14.28s-12.92-6.97-20.2-9.05c-7.28-2.09-15.09-3.13-23.45-3.13-10.06 0-19.19 1.32-27.4 3.95-8.2 2.63-14.74 6.35-19.62 11.14-4.87 4.8-7.31 10.53-7.31 17.18 0 6.19 1.7 11.18 5.11 14.97 3.4 3.8 8.13 6.7 14.16 8.71 6.04 2.01 12.81 3.64 20.32 4.88 7.51 1.24 15.44 2.48 23.8 3.71 7.12.78 14.51 1.82 22.17 3.13 7.66 1.32 14.89 3.33 21.71 6.04 6.81 2.71 12.27 6.66 16.37 11.84 4.1 5.19 6.15 12.34 6.15 21.47s-2.98 17.3-8.94 24.49c-5.96 7.2-14.48 12.81-25.54 16.83-11.07 4.02-24.34 6.04-39.82 6.04z"
      />
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1={38.944}
        y1={41.444}
        x2={296.633}
        y2={299.133}
        gradientTransform="matrix(1 0 0 -1 0 350.74)"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#aa4e9c",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#28aae1",
          }}
        />
      </linearGradient>
      <circle
        cx={176.23}
        cy={172.01}
        r={156.2}
        style={{
          fill: "url(#SVGID_1_)",
        }}
      />
      <path
        d="M283.26 134.29c-13.22 0-24.87 6.65-31.82 16.78-.03.04-.06.07-.08.12-5.63 9.91-16.99 15.17-28.39 15.17-9.51 0-18.54-4.14-24.81-11.28-5.42-6.17-13.61-9.85-22.63-9.08-13.11 1.12-23.63 11.82-24.54 24.95-1.09 15.76 11.37 28.89 26.9 28.89 9.59 0 18.01-5.01 22.79-12.55 3.1-4.89 8.43-7.92 14.22-7.92h43.59c3.46 0 5.19 4.18 2.74 6.62l-78.53 78.53a7.973 7.973 0 0 1-11.27 0l-16.94-16.94-51.32-51.32-16.54-16.54c-3.48-3.48-3.48-9.13 0-12.61l85.08-85.08a7.563 7.563 0 0 1 10.69 0l17.24 17.24c9.62-6.62 16.15-17.47 16.77-29.81 1.15-23.01-17.87-41.88-40.93-40.48-19.25 1.17-34.86 16.73-36.09 35.97-.12 1.87-.11 3.72.03 5.52 1.21 15.66-4.77 31.03-15.88 42.13-13.7 13.74-32.24 21.4-51.63 21.7-.17 0-.35.01-.52.01-20.16.58-36.68 16.94-37.42 37.09-.81 21.97 16.76 40.04 38.55 40.04h.23c16.91-.1 33.21 6.26 45.16 18.22l5.68 5.68c10.87 10.87 16.53 25.84 15.76 41.18-.01.12-.01.24-.02.36-.72 18.57 11.66 34.99 29.82 38.97 25.11 5.5 47.31-13.46 47.31-37.62 0-.26 0-.51-.01-.76-.45-18.08 6.89-35.49 19.68-48.28l1.13-1.13c11.65-11.65 27.74-17.42 44.2-16.67.96.04 1.93.05 2.91.03 20.15-.57 36.67-16.91 37.43-37.05.84-21.99-16.74-40.08-38.54-40.08z"
        style={{
          fill: "#fff",
        }}
      />
    </Svg>
  );
};
export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
