import { pixelToRem } from '@styles/pxToRem';
import styled from 'styled-components';

export const Container = styled.div`
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
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 8px;
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