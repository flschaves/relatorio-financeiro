import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
	${normalize}

	*, *::after, *::before {
		box-sizing: border-box;
	}

	body {
		font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input {
    background: #FFFFFF;
    border: 1px solid #555555;
    padding: 5px;
    margin: 5px 0;
  }

  button {
    border: none;
    background: ${props => props.theme.light.lighter};
    color: #FFFFFF;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.light.primary};
    }
  }
`;
