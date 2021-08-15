import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Fonts preconnect */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          {/* Inter */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          {/* Fire Code */}
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-inter bg-gray-50 dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
