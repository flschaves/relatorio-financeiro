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
    overflow-y: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
