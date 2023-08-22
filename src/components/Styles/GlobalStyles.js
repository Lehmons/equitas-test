// ****************************************/
// Global Styles & Resets
// ****************************************/

import { createGlobalStyle } from "styled-components";
import media from "./Media";
import font from "./Font";

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
	}


	html{
		box-sizing: border-box;
		-webkit-print-color-adjust: exact;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	*, *:before, *:after{
		box-sizing: inherit;
	}

	body,h1,h2,h3,h4,p{
		border: 0;
	}

  body {
    font-weight: 400;
		font-family: ${font.family100};
  }

	html, body{
		font-size:  ${(props) =>
      (props.theme.baseline * 100) / props.theme.viewport}vmax;
		/* font-size: 0.694vmax */
		/* 1440px times 0.694 = 10px base */
	}

	a {
		outline: 0;
		text-decoration: none;
	}


	h1, h2, h3, h4, h5, h6, p, a, li, span, input, label, button, em, figcaption{
		text-rendering: optimizelegibility;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		font-weight: normal;
		font-feature-settings: "kern" 1;
	}

	.totalLaunches {
		position: absolute;
		top: 2rem;
		right: 2rem;
		${media.smallDesktopAndBelow`
			top: 20px;
			right: 20px;
		`}
	}

.totalLaunches p {
  font-size: ${font.small};
	color: white;
}


.pagination {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 4rem 0;
	${media.smallDesktopAndBelow`
		padding: 40px 0;
	`}
}


button {
	background: #0bc984;
	color: black;
  font-size: ${font.p};
  line-height: ${font.pLineHeight};
	width: 130px;
  height: 40px;
	border: 0;
	${media.smallDesktopAndBelow`
		font-size: ${font.pMobile};
	`}
}

button:hover{
	background: white;
	cursor: pointer;
}

button+button{
	margin-left: 20px;
}



	.currentPage button {
		justify-content: center;
	}

	.container {
		position: relative;
		z-index: 2;
	}

	.planet {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }

  .planet img {
    width: 100%;
    height: 100%;
    object-fit: cover;
		object-position: center bottom;
    user-select: none;
  }

`;

export default GlobalStyles;
