import styled from "styled-components";
import { font, media, underline } from "../Styles";

const LaunchStyles = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 2rem;
  background: ${(props) => props.theme.grey50};
  ${media.smallDesktopAndBelow`
    border-radius: ${(props) => props.theme.borderRadiusDesktop};
    padding: 20px;
  `}

  .dataContainer {
    min-height: 14rem;
    ${media.smallDesktopAndBelow`
      min-height: 140px;
    `}
  }

  .launchTitle {
    font-weight: bold;
    font-size: ${font.h2};
    color: ${(props) => props.theme.green};
    ${media.smallDesktopAndBelow`
      font-size: ${font.h2Tablet};
    `}
    ${media.tabletLandscapeAndBelow`
      font-size: ${font.h2Mobile};
    `}
  }

  .launchId {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    ${media.smallDesktopAndBelow`
      bottom: 20px;
      left: 20px;
    `}
  }

  .launchId span {
    color: ${(props) => props.theme.white50};
    font-size: ${font.small};
  }

  .launchId span + span {
    margin-left: 0.8rem;
    ${media.smallDesktopAndBelow`
      margin-left: 8px;
    `}
  }

  .flightNumber {
    margin-top: 1.5rem;
    ${media.smallDesktopAndBelow`
      margin-top: 15px;
    `}
  }

  .flightNumber,
  .launchDate {
    color: white;
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
      font-size: ${font.pMobile};
    `}
  }

  .stat {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
    column-gap: 1.5rem;
    ${media.smallDesktopAndBelow`
      row-gap: 30px;
      column-gap: 15px;
    `}
  }
`;

export default LaunchStyles;
