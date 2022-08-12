import "../styles/globals.css";
import "../styles/login.css";
import "../styles/button1.css";
import "../styles/button2.css";
import "../styles/loggedHome.css";
import "../styles/home.css";
import "../styles/fullScreenLoading.css";
import "../styles/homeNav.css";
import "../styles/logOutButton.css";
import "../styles/newnote.css";
import "../styles/backPage.css";
import "../styles/iconsSection.css";
import "../styles/notification.css";
import "../styles/nota.css";
import "../styles/notes.css";
import "../styles/uniqueNoteComp.css";
import "../styles/uniqueNote.css";
import "../styles/deleteConfirmation.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/logo.png" />
        <title>NoteHub</title>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Create your notes online!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
