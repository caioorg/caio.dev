import styled from 'styled-components'
import Image from 'next/image'
import { pixelToRem } from '@styles/pxToRem'
import { hexToRGB } from '@styles/hexToRGB'

export const Container = styled.div`
  height: 100vh;
  max-width: ${pixelToRem(1200)};
  width: 100%;
  margin: 0 auto;
  padding: ${pixelToRem(40)} 0;
`

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
  gap: ${pixelToRem(40)}
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

  & sub {
    font-size: ${pixelToRem(24)};
    font-weight: 500;
    color: var(--yellow);
  }
`

export const Resume = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const About = styled.div`
  padding-top: ${pixelToRem(72)};
  max-width: ${pixelToRem(592)};
  width: 100%;

  & h3 {
    font-weight: 600;
    font-size: ${pixelToRem(47)};
    color: ${hexToRGB('#868490')};
  }

  & h2 {
    font-weight: 600;
    font-size: ${pixelToRem(80)};
    color var(--white);
    margin-bottom: ${pixelToRem(24)};
  }

  & p {
    padding-right: 150px;
  }

  & hr {
    width: ${pixelToRem(283)};
    height: ${pixelToRem(8)};
    background: var(--yellow);
    border-radius: 8px;
    margin-bottom: ${pixelToRem(40)};
    border: 0;
  }

  & p {
    font-size: ${pixelToRem(16)};
    font-weight: 400;
    color: #868490;
    margin-bottom: ${pixelToRem(58)}
  }

  & a {
    font-size: ${pixelToRem(16)};
    font-weight: 400;
    color: var(--yellow);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${pixelToRem(52)}
  }
`

export const Experience = styled.div`
  text-align: right;
  max-width: ${pixelToRem(178)};
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(61)};

  & h4 {
    font-size: ${pixelToRem(24)};
    font-weight: 500;
    color: #868490;
  }

  & h5 {
    font-size: ${pixelToRem(52)};
    font-weight: 600;
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
`