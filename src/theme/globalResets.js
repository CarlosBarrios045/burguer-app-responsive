// Remove
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;

    font-family: "Montserrat", sans-serif !important;
    
    :focus {
      outline: none;
    }
  }

  
  body {
    background-color: #e7e7e7 !important;
  }

  ul {
    list-style: none;
  }
`;
