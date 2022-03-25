import styled from 'styled-components'
import { pixelToRem } from '@styles/pxToRem'

export const Container = styled.div`
  height: 100vh;
  max-width: ${pixelToRem(1200)};
  width: 100%;
  margin: 0 auto;
  padding: ${pixelToRem(40)} 0;
`