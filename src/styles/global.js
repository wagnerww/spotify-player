import { createGlobalStyle } from "styled-components";

import "rc-slider/assets/index.css";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  outline:0px;
}

html, body, #root{
  height:100%;
}

body{
  text-rendering:optimizeLegibility!important;
  --webkit-font-smoothing:antialised !important;
  background:#181818;
  font-family:'Montserrat', sans-serif;
  color:#FFF;
}

`;
