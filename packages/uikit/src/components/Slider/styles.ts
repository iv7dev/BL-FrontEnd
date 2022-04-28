import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const bunnyHeadMax = `"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MDAgNjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPGc+DQoJPGc+DQoJCQ0KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdJRF8xXyIgY3g9IjMwNC4wMjMiIGN5PSI1NDcuMjQ5MyIgcj0iNTEwLjI1ODUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC01KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KCQkJPHN0b3AgIG9mZnNldD0iMy43MjQ1OTllLTAzIiBzdHlsZT0ic3RvcC1jb2xvcjojMjlCQUYzIi8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIwLjk5ODkiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMTRFRTkiLz4NCgkJPC9yYWRpYWxHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY3LjE4LDE4Ni4yNWwtMjMuMzIsOTguNDNsMjAzLjcxLDIxOS4wMWM3LjMzLTQuNjMsMTUuMjktOC4zMiwyMy43Ni0xMC45bC05OC42NS0yNzguMDZMNjcuMTgsMTg2LjI1eg0KCQkJIE04MC4zNCw0NTMuNjJsMTM1LjkzLDgxLjY5YzMuMS01LjAyLDYuNjMtOS43NCwxMC41NS0xNC4xMUwzOS41MywzMjEuNjRMODAuMzQsNDUzLjYyeiBNMzAwLDIyLjY4TDE4OS4wOSwxNzQuMTZsMTAzLjk2LDMxNC42Mw0KCQkJYzIuMy0wLjE2LDQuNjEtMC4yNyw2Ljk1LTAuMjdjMi4zNCwwLDQuNjUsMC4xMSw2Ljk1LDAuMjdsMTAzLjk2LTMxNC42M0wzMDAsMjIuNjh6IE01MzIuODIsMTg2LjI1bC0xMDUuNSwyOC40N2wtOTguNjUsMjc4LjA2DQoJCQljOC40NiwyLjU4LDE2LjQzLDYuMjcsMjMuNzYsMTAuOWwyMDMuNzItMjE5LjAxTDUzMi44MiwxODYuMjV6IE0zNzMuMTgsNTIxLjJjMy45Miw0LjM3LDcuNDUsOS4wOSwxMC41NSwxNC4xMWwxMzUuOTMtODEuNjkNCgkJCWw0MC44MS0xMzEuOTlMMzczLjE4LDUyMS4yeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"`;
const bunnyHeadMain = `"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MDAgNjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPGc+DQoJPGc+DQoJCQ0KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdJRF8xXyIgY3g9IjMwNC4wMjMiIGN5PSI1NDcuMjQ5MyIgcj0iNTEwLjI1ODUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC01KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KCQkJPHN0b3AgIG9mZnNldD0iMy43MjQ1OTllLTAzIiBzdHlsZT0ic3RvcC1jb2xvcjojMjlCQUYzIi8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIwLjk5ODkiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMTRFRTkiLz4NCgkJPC9yYWRpYWxHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY3LjE4LDE4Ni4yNWwtMjMuMzIsOTguNDNsMjAzLjcxLDIxOS4wMWM3LjMzLTQuNjMsMTUuMjktOC4zMiwyMy43Ni0xMC45bC05OC42NS0yNzguMDZMNjcuMTgsMTg2LjI1eg0KCQkJIE04MC4zNCw0NTMuNjJsMTM1LjkzLDgxLjY5YzMuMS01LjAyLDYuNjMtOS43NCwxMC41NS0xNC4xMUwzOS41MywzMjEuNjRMODAuMzQsNDUzLjYyeiBNMzAwLDIyLjY4TDE4OS4wOSwxNzQuMTZsMTAzLjk2LDMxNC42Mw0KCQkJYzIuMy0wLjE2LDQuNjEtMC4yNyw2Ljk1LTAuMjdjMi4zNCwwLDQuNjUsMC4xMSw2Ljk1LDAuMjdsMTAzLjk2LTMxNC42M0wzMDAsMjIuNjh6IE01MzIuODIsMTg2LjI1bC0xMDUuNSwyOC40N2wtOTguNjUsMjc4LjA2DQoJCQljOC40NiwyLjU4LDE2LjQzLDYuMjcsMjMuNzYsMTAuOWwyMDMuNzItMjE5LjAxTDUzMi44MiwxODYuMjV6IE0zNzMuMTgsNTIxLjJjMy45Miw0LjM3LDcuNDUsOS4wOSwxMC41NSwxNC4xMWwxMzUuOTMtODEuNjkNCgkJCWw0MC44MS0xMzEuOTlMMzczLjE4LDUyMS4yeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"`;
const bunnyButt = `"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MDAgNjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPGc+DQoJPGc+DQoJCQ0KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdJRF8xXyIgY3g9IjMwNC4wMjMiIGN5PSI1NDcuMjQ5MyIgcj0iNTEwLjI1ODUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC01KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KCQkJPHN0b3AgIG9mZnNldD0iMy43MjQ1OTllLTAzIiBzdHlsZT0ic3RvcC1jb2xvcjojMjlCQUYzIi8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIwLjk5ODkiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMTRFRTkiLz4NCgkJPC9yYWRpYWxHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY3LjE4LDE4Ni4yNWwtMjMuMzIsOTguNDNsMjAzLjcxLDIxOS4wMWM3LjMzLTQuNjMsMTUuMjktOC4zMiwyMy43Ni0xMC45bC05OC42NS0yNzguMDZMNjcuMTgsMTg2LjI1eg0KCQkJIE04MC4zNCw0NTMuNjJsMTM1LjkzLDgxLjY5YzMuMS01LjAyLDYuNjMtOS43NCwxMC41NS0xNC4xMUwzOS41MywzMjEuNjRMODAuMzQsNDUzLjYyeiBNMzAwLDIyLjY4TDE4OS4wOSwxNzQuMTZsMTAzLjk2LDMxNC42Mw0KCQkJYzIuMy0wLjE2LDQuNjEtMC4yNyw2Ljk1LTAuMjdjMi4zNCwwLDQuNjUsMC4xMSw2Ljk1LDAuMjdsMTAzLjk2LTMxNC42M0wzMDAsMjIuNjh6IE01MzIuODIsMTg2LjI1bC0xMDUuNSwyOC40N2wtOTguNjUsMjc4LjA2DQoJCQljOC40NiwyLjU4LDE2LjQzLDYuMjcsMjMuNzYsMTAuOWwyMDMuNzItMjE5LjAxTDUzMi44MiwxODYuMjV6IE0zNzMuMTgsNTIxLjJjMy45Miw0LjM3LDcuNDUsOS4wOSwxMC41NSwxNC4xMWwxMzUuOTMtODEuNjkNCgkJCWw0MC44MS0xMzEuOTlMMzczLjE4LDUyMS4yeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"`;

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${isMax ? bunnyHeadMax : bunnyHeadMain});
  background-color: transparent;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  width: 50px;
  height: 58px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, -2px);
  transition: 200ms transform;
  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  background: url(${bunnyButt}) no-repeat;
  height: 0px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 15px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;
  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }
  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }
  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 10px;
  position: absolute;
  top: 18px;
`;
