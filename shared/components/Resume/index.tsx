import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi'
import { resumeExperience } from '@utils/experiences'
import { About, Experience, Me, Container, Name, Profession, ExperienceDescription, ExperienceCount  } from './styles'

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
      <picture>
        <source srcSet="/me.avif" type="image/avif" />
        <Me src='/me.jpg' alt="I'm Caio" loading="lazy" />
      </picture>
      <Experience>
        {resumeExperience.map(({ label, number }) => (
          <div key={label}>
            <ExperienceDescription>{label}</ExperienceDescription>
            <ExperienceCount>{number} +</ExperienceCount>
          </div>
        ))}
      </Experience>
    </Container>
  )
}

export default Resume;