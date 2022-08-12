import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  deleteNote,
  getUniqueNote,
  onAuthStateChanged,
} from "../../firebase/client";
import { VscLoading } from "react-icons/vsc";
import FullScreenLoading from "../../components/fullScreenLoading";
import { IoIosArrowBack } from "react-icons/io";
import UniqieNoteComp from "../../components/uniqueNoteComp";
import LogOutButton from "../../components/logOutButton";
import DeleteConfirmation from "../../components/deleteConfirmation";

const NoteUnique = (props) => {
  const router = useRouter();
  const { nid } = router.query;
  const [note, setNote] = useState(props);
  const [user, setUser] = useState(undefined);

  const handleDeleteNote = () => {
    deleteNote(note.id);
    setTimeout(() => {
      router.push("/notes");
    }, 250);
  };

  const handleOpenDeleteConfirmation = () => {
    document.querySelector(".delete-confirmation").classList.remove("off");
  };

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
  }, []);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        document.querySelector(".full-screen-loading").classList.add("out");
      }, 150);
    } else if (user === null) {
      router.replace("/");
    }
  }, [user]);

  // useEffect(() => {
  //   if (note) {
  //     if (!note.id) {
  //       router.replace("/notes");
  //     }
  //   }
  // }, [note]);

  const backToNotes = () => {
    router.push("/notes");
  };

  return (
    <main className="unique-note-main" >
      <LogOutButton onClick={handleOpenDeleteConfirmation}>
        DELETE NOTE
      </LogOutButton>
      <DeleteConfirmation handleDelete={handleDeleteNote} />
      {note === null ? (
        <VscLoading className="loading-notes" />
      ) : (
        //   <VscLoading className="loading-notes" />
        note.id &&
         <UniqieNoteComp nota={note} key={note.id} />
      )}
      <FullScreenLoading />
      <IoIosArrowBack onClick={backToNotes} className="backpage" />
    </main>
  );
};

export const getServerSideProps = async (cont)=>{
const {params, res} = cont
  const {nid} = params

  const apiResponse = await fetch(`https://next-firebase-login-one.vercel.app//api/notes/${nid}`)
    if (apiResponse.ok) {
      const props = await apiResponse.json()
      return {props}
    }
    else {
      res.writeHead(301, { Location: "/notes" }).end()
    }
}

export default NoteUnique;