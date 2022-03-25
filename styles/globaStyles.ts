import { createGlobalStyle } from "styled-components";
import background from '@images/background.png';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    background: url(/background.png) no-repeat;
    background-size: auto;
    color: var(--white);
  }
  :root {
    --background: #030E21;
    --white: #FFFFFF;
    --yellow: #F8E7A1;
  }`;