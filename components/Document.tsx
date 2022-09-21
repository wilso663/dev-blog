import {Html, Head, Main, NextScript} from 'next/document'

interface DocumentProps {
  stylesheetURL: string;
}

//The next.js documentation specifies to use a Document component in this way to inject custom css stylesheets
const Document: React.FC<DocumentProps> = ({stylesheetURL}:DocumentProps) => {
  return (
    <Html>
      <Head>
        <link ref="stylesheet" href={stylesheetURL} type="text/css" />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

export default Document