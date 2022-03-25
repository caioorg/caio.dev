import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { DiGithubFull, DiReact, DiCss3, DiHtml5, DiJsBadge, DiSass, DiNodejsSmall } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import { paths } from '@utils/path'
import { resumeExperience } from '@utils/experiences'
import { Container, Navigation, Menu, MenuItem, Name, Resume, About, Experience, Me, Technologies } from '@styles/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome | Caio</title>
      </Head>
      <Container>
      <Navigation>
        <Name>CAIO<sub>.dev</sub></Name>
        <Menu>
          {paths.map(({ to, name }) => (
            <MenuItem key={to}>
              <Link key={to} href={to}>
                <a>{name}</a>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Navigation>
      <main>
        <Resume>
          <About>
            <h3>Front End Developer</h3>
            <h2>Caio Almeida</h2>
            <hr />
            <p>
              Among many things I like to do most in this life, one of them is
              being a Front-End developer, seeing an application solving a customer&apos;s
              problem and being satisfied is like having been part of it.
            </p>

            <Link href='#' passHref>
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
        </Resume>
        <Technologies>
          <DiHtml5 />
          <DiCss3 />
          <DiSass />
          <DiJsBadge />
          <DiGithubFull />
          <DiReact />
          <DiNodejsSmall />
          <FaAws />
        </Technologies>
      </main>
    </Container>
    </>
  )
}

export default Home
