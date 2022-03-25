import styled from 'styled-components';
import { pixelToRem } from '@styles/pxToRem';
import { device } from '@styles/responsive';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  place-content: center;
  padding: ${pixelToRem(43)} ${pixelToRem(120)};
  gap: ${pixelToRem(32)};
  flex-direction: row;

  @media ${device.mobileS} {
    padding: ${pixelToRem(20)}
  }

  & a {
    font-size: ${pixelToRem(24)}
  }

  & svg {
    width: 40px;
    height: 30px;
    color: var(--white);
    opacity: 0.7;
  }
`;
