// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html style={{ fontSize: 12 }}>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="content-type" content="text/html" />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta
            name="viewport"
            content="initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,width=device-width"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="app-mobile-web-app-capable" content="yes" />
          <meta
            name="app-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script></script>
      </html>
    );
  }
}
