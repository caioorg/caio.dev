import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi'
import { resumeExperience } from '@utils/experiences'
import { About, Experience, Me, Container, Name, Profession  } from './styles'

const Resume: React.FC = () => {
  return (
    <Container id='about'>
      <About>
        <Profession>Front End Developer</Profession>
        <Name>Caio Almeida</Name>
        <hr />
        <p>
          Among many things I like to do most in this life, one of them is
          being a Front-End developer, seeing an application solving a customer&apos;s
          problem and being satisfied is like having been part of it.
        </p>

        <Link href='#contact' passHref>
          <a>
            Let’s talk
            <FiArrowRight />   
          </a>
        </Link>
      </About>
      <Me src='/me.jpg' />
      <Experience>
        {resumeExperience.map(({ label, number }) => (
          <div key={label}>
            <h4>{label}</h4>
            <h5>{number} +</h5>
          </div>
        ))}
      </Experience>
    </Container>
  )
}

export default Resume;