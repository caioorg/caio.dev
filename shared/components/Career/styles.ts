import styled from 'styled-components';
import { pixelToRem } from '@styles/pxToRem';
import { device } from '@styles/responsive';

export const Container = styled.div`
  padding-bottom: ${pixelToRem(120)};

  @media ${device.mobileS} {
    padding-bottom: ${pixelToRem(30)};
  }

  & h3 {
    font-size: ${pixelToRem(40)};
    margin-bottom: ${pixelToRem(32)};

    &::after {
      content: "";
      width: ${pixelToRem(50)};
      height: ${pixelToRem(5)};
      background: var(--yellow);
      display: block;
      border-radius: 8px;
    }

    @media ${device.mobileS} {
      font-size: ${pixelToRem(28)};
      margin-bottom: ${pixelToRem(24)};
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 8px;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
    grid-row-gap: ${pixelToRem(32)};
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Card = styled.div`
  & strong {
    font-size: ${pixelToRem(20)};
    font-weight: 500;
  }

  & p, span {
    font-size: ${pixelToRem(14)};
    color: #868490;
    margin-bottom: ${pixelToRem(8)};
    display: block;
    max-height: ${pixelToRem(250)};
  }


`