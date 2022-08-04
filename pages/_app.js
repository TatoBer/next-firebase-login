import "../styles/globals.css";
import "../styles/login.css";
import "../styles/button1.css";
import "../styles/button2.css";
import "../styles/loggedHome.css";
import "../styles/home.css";
import "../styles/fullScreenLoading.css";
import "../styles/logOutButton.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/logo.png" />
        <title>Login APP</title>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Aplicacion creada para experimentar con Next.js y firebase" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
