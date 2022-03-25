import styled from 'styled-components'
import { pixelToRem } from '@styles/pxToRem'
import { device } from './responsive'

export const Container = styled.div`
  height: 100vh;
  max-width: ${pixelToRem(1200)};
  width: 100%;
  margin: 0 auto;
  padding: ${pixelToRem(40)} 0;

  @media ${device.mobileS} {
    padding: ${pixelToRem(20)};
  }

  @media ${device.laptop} {
    padding: ${pixelToRem(20)};
  }
`