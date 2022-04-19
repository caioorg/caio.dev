import { createGlobalStyle } from "styled-components";
import { hexToRGB } from './hexToRGB'
import { device } from "./responsive";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    background: url(/background.avif) no-repeat;
    background-color: var(--background);
    background-size: cover;
    color: var(--white);
    
    @media ${device.mobileS} {
      background-size: auto;
    }

    @media ${device.tablet} {
      background-size: auto;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${hexToRGB('#F8E7A1', 0.7)}; 
    border-radius: 10px;
  }
  
  :root {
    --background: #030E21;
    --white: #FFFFFF;
    --yellow: #F8E7A1;
  }`;