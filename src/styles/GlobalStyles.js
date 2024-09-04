import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f4f7fa;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
