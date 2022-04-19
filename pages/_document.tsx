import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta content='Caio Almeida' property='og:title' />
          <meta content="I'm a front end web developer and I help people get into programming" name="description" />
          <meta content="I'm a front end web developer and I help people get into programming" property='og:description' />
          <meta content="https://caio-dev.vercel.app/" name="og:url" />
          <meta content='https://avatars.githubusercontent.com/u/29618154?v=4' property='og:image' />
          <meta name="keywords" content="front end, front-end, frontend, developer, developer frontend, frontend developer, front-end developer, front end developer" />
          <meta name="robots" content="index, follow" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument