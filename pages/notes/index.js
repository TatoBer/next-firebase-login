import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackPage from "../../components/backPage";
import FullScreenLoading from "../../components/fullScreenLoading";
import { VscLoading } from "react-icons/vsc";

import { getNotes, onAuthStateChanged } from "../../firebase/client";
import Nota from "../../components/nota";

export default function Notes() {
  const [user, setUser] = useState(undefined);
  const [noteList, setNoteList] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
  }, []);

  useEffect(() => {
    if (user) {
      getNotes(user).then((notes) => {
        notes.sort(function (a, b) {
          if (a.createdAt.seconds > b.createdAt.seconds) {
            return -1;
          }
          if (a.createdAt.seconds < b.createdAt.seconds) {
            return 1;
          }
          return 0;
        });
        setNoteList(notes);
      });
      setTimeout(() => {
        document.querySelector(".full-screen-loading").classList.add("out");
      }, 150);
    } else if (user === null) {
      router.replace("/");
    }
  }, [user]);

  return (
    <>
      <main className="notes-main">
        <h2>YOUR NOTES</h2>
        {noteList === undefined ? (
          <VscLoading className="loading-notes" />
        ) : noteList.length > 0 ? (
          noteList.map((nota) => {
            return <Nota nota={nota} key={nota.id} />;
          })
        ) : (
          <p>
            You don't have any note
            <br />
            <a href="/newnote">
              create one <b>+</b>
            </a>
          </p>
        )}
        <BackPage />
        <FullScreenLoading />
      </main>
    </>
  );
}
