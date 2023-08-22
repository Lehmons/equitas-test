// ****************************************/
// Launches Styled
// ****************************************/

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const LauchesStyles = styled.div`
  .Title {
    width: 100%;
    padding: 8rem 4rem;
    ${media.smallDesktopAndBelow`
      padding: 80px 40px;
    `}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
    `}
  }

  .Title h1 {
    color: white;
    font-weight: bold;
    font-size: ${font.h1};
    ${media.smallDesktopAndBelow`
      font-size: ${font.h1Tablet};
    `}
    ${media.tabletLandscapeAndBelow`
      font-size: ${font.h1Mobile};
    `}
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    row-gap: 4rem;
    padding: 0 4rem;
    ${media.smallDesktopAndBelow`
      column-gap: 40px;
      row-gap: 40px;
      padding: 0 40px;
    `}
    ${media.tabletPortraitAndBelow`
      grid-template-columns: repeat(1, 1fr);
    `}
    ${media.tabletPortraitAndBelow`
      padding-left: 20px;
      padding-right: 20px;
      row-gap: 25px;
    `}
  }

  .coordinates {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: white;
    font-size: ${font.small};
    ${media.smallDesktopAndBelow`
      top: 20px;
      right: 20px;
    `}
  }
`;

export default LauchesStyles;
