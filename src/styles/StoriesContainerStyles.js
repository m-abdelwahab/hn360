import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: black;
    background-color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoriesContainerWrapper = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;
  -webkit-box-shadow: 10px 16px 42px -3px rgba(0,0,0,0.56);
  -moz-box-shadow: 10px 16px 42px -3px rgba(0,0,0,0.56);
  box-shadow: 10px 16px 42px -3px rgba(0,0,0,0.56);
`;

export const About = styled.p`
   color: black;
    background-color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
`;