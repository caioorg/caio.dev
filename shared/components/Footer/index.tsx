import React from 'react';
import { SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si'
import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container id='contact'>
      <p>Follow us:</p>
      <a href='https://www.linkedin.com/in/caio-almeida-silva/' rel="noreferrer" target='_blank'>
        LinkedIn
        <SiLinkedin />
      </a>
      <a href='mailto:caioalmeidasilva96@gmail.com' rel="noreferrer" target='_blank'>
        Gmail
        <SiGmail />
      </a>
      <a href='https://www.instagram.com/caioasilva_/' rel="noreferrer" target='_blank'>
        Instagram
        <SiInstagram />
      </a>
    </Container>
  )
}

export default Footer;