import styled from 'styled-components'
import { pixelToRem } from '@styles/pxToRem'
import { hexToRGB } from '@styles/hexToRGB'
import { device } from '@styles/responsive'

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-bottom: ${pixelToRem(150)};
  background: ${hexToRGB('#091427', 0.6)};
  backdrop-filter: blur(8px);
  display: flex;
  place-content: center;
  padding: ${pixelToRem(43)} ${pixelToRem(120)};
  gap: ${pixelToRem(32)};
  flex-direction: row;

  @media ${device.mobileS} {
    padding: ${pixelToRem(20)};
    gap: ${pixelToRem(8)};
    margin-bottom: ${pixelToRem(40)};
  }
  
  & svg {
    width: calc(100% / 8 - 20px);
    height: 60px;
    opacity: 0.7;

    @media ${device.mobileS} {
      width: calc(100% / 6 - 10px);
    }
  }
`