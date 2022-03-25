import styled from 'styled-components'
import { pixelToRem } from '@styles/pxToRem'
import { hexToRGB } from '@styles/hexToRGB'
import { device } from '@styles/responsive'

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${pixelToRem(35)};
`

export const Menu = styled.ul`
  list-style: none;
  width: ${pixelToRem(411)};
  display: inherit;
  justify-content: flex-end;
  gap: ${pixelToRem(40)};

  @media ${device.mobileS} {
    display: none;
  }
`

export const MenuItem = styled.li`
  & a {
    text-decoration: none;
    color: ${hexToRGB('#FFFFFF', 0.7)};
    font-weight: 500;

    &:hover {
      color: var(--white);
    }
  }
`

export const Name = styled.h1`
  font-weight: 700;
  font-size: ${pixelToRem(32)};
  display: inherit;
  align-items: baseline;
  color: ${hexToRGB('#E5E5E5')};

  @media ${device.mobileS} {
    font-size: ${pixelToRem(18)};
  };

  & sub {
    font-size: ${pixelToRem(24)};
    font-weight: 500;
    color: var(--yellow);

    @media ${device.mobileS} {
      font-size: ${pixelToRem(16)};
    }
  }
`