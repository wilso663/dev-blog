import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
  return (
    <Html className="scroll-smooth">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet"></link>
      {/* 
        This css stylesheet by Andrew Gioia has some premade Magic the Gathering mana cost icons that are pixel perfect, so I've included it here for use in the frame header.
      */}
      <link href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css" rel="stylesheet" type="text/css" />

      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

export default Document