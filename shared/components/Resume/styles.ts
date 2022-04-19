import styled from 'styled-components'
import { device } from '@styles/responsive'
import { pixelToRem } from '@styles/pxToRem'
import { hexToRGB } from '@styles/hexToRGB'

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const About = styled.section`
  margin-bottom: ${pixelToRem(120)};
  padding-top: ${pixelToRem(72)};
  max-width: ${pixelToRem(592)};
  width: 100%;

  @media ${device.mobileS} {
    padding-top: 0;
    max-width: ${pixelToRem(207.5)};
    margin-bottom: ${pixelToRem(60)};
  }

  @media ${device.tablet} {
    max-width: ${pixelToRem(384)}
  }

  & p {
    padding-right: ${pixelToRem(150)};
    font-size: ${pixelToRem(16)};
    font-weight: 400;
    color: #868490;
    margin-bottom: ${pixelToRem(58)};

    @media ${device.mobileS} {
      padding-right: 0;
      font-size: ${pixelToRem(12)};
      margin-bottom: ${pixelToRem(16)}
    }
  }

  & h3 {
    font-weight: 600;
    font-size: ${pixelToRem(47)};
    color: ${hexToRGB('#868490')};

    @media ${device.mobileS} {
      font-size: ${pixelToRem(20)};
    }
  }

  & h2 {
    font-weight: 600;
    font-size: ${pixelToRem(80)};
    color var(--white);
    margin-bottom: ${pixelToRem(24)};
    
    @media ${device.mobileS} {
      font-size: ${pixelToRem(28)};
      margin-bottom: ${pixelToRem(12)};
    }
  }


  & hr {
    width: ${pixelToRem(283)};
    height: ${pixelToRem(8)};
    background: var(--yellow);
    border-radius: 8px;
    margin-bottom: ${pixelToRem(40)};
    border: 0;

    @media ${device.mobileS} {
      width: ${pixelToRem(140)};
      height: ${pixelToRem(4)};
    }
  }

  & a {
    font-size: ${pixelToRem(16)};
    font-weight: 400;
    color: var(--yellow);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${pixelToRem(52)};

    @media ${device.mobileS} {
      font-size: ${pixelToRem(12)};
      gap: ${pixelToRem(25)};
    }
  }
`

export const Experience = styled.div`
  text-align: right;
  max-width: ${pixelToRem(178)};
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(61)};

  @media ${device.mobileS} {
    max-width: ${pixelToRem(147.5)};
    gap: ${pixelToRem(25)};
  }

  @media ${device.tablet} {
    max-width: ${pixelToRem(384)}
  }

  

  & h4 {
    font-size: ${pixelToRem(24)};
    font-weight: 500;
    color: #868490;
    
    @media ${device.mobileS} {
      font-size: ${pixelToRem(16)};
    }
  }

  & h5 {
    font-size: ${pixelToRem(52)};
    font-weight: 600;

    @media ${device.mobileS} {
      font-size: ${pixelToRem(24)};
    }
  }
`

export const Me = styled.img`
  position: absolute;
  border-radius: 6px;
  z-index: -1;
  width: ${pixelToRem(510)};
  height: auto;
  left: 62.75%;
  transform: translateX(-50%);
  opacity: 0.7;

  @media ${device.mobileS} {
    display: none;
  }
`