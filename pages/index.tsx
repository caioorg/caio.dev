import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@components/Header'
import Resume from '@components/Resume'
import MyTechnologies from '@components/MyTechnologies'
import Career from '@components/Career'
import Footer from '@components/Footer'
import { Container } from '@styles/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome | Caio</title>
      </Head>
      <Container>
        <Header />
        <main>
          <Resume />
          <MyTechnologies />
          <Career />
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default Home
