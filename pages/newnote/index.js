import { useEffect, useState } from "react";
import {
  ImDroplet,
  ImFeed,
  ImAddressBook,
  ImTicket,
  ImPhone,
  ImPushpin,
  ImDatabase,
  ImUserTie,
  ImMug,
  ImLeaf,
  ImRocket,
  ImPower,
  ImCross,
  ImCheckmark,
  ImAppleinc,
  ImClubs,
  ImLibrary,
  ImFolderOpen,
} from "react-icons/im";
import BackPage from "../../components/backPage";
import Button1 from "../../components/button1";
import { useRouter } from "next/router";
import { onAuthStateChanged, addNewNote } from "../../firebase/client";
import FullScreenLoading from "../../components/fullScreenLoading";
import Notification from "../../components/notification";

export default function Home() {
  const [user, setUser] = useState(undefined);
  const router = useRouter();

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

  const [icon, setIcon] = useState(<ImLibrary />);
  const [iconS, setIconS] = useState("ImLibrary");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector("input[name=newnote-title]").value = "";
    document.querySelector(".newnote-main textarea").value = "";
    setTitle("");
    setDescription("");
    addNewNote({
      title,
      description,
      icon: iconS,
      userEmail: user.email,
    });
    const created = document.querySelector(".created")
    created.classList.remove("off")
    setTimeout(() => {
    created.classList.add("off")
    }, 1700);
  };

  const iconFunctions = [
    () => {
      setIcon(<ImDroplet />);
      setIconS("ImDroplet");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImFeed />);
      setIconS("ImFeed");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImAddressBook />);
      setIconS("ImAddressBook");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImTicket />);
      setIconS("ImTicket");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImPhone />);
      setIconS("ImPhone");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImPushpin />);
      setIconS("ImPushpin");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImDatabase />);
      setIconS("ImDatabase");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImUserTie />);
      setIconS("ImUserTie");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImMug />);
      setIconS("ImMug");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImLeaf />);
      setIconS("ImLeaf");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImRocket />);
      setIconS("ImRocket");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImPower />);
      setIconS("ImPower");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImCross />);
      setIconS("ImCross");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImCheckmark />);
      setIconS("ImCheckmark");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImAppleinc />);
      setIconS("ImAppleinc");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImClubs />);
      setIconS("ImClubs");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImLibrary />);
      setIconS("ImLibrary");
      document.querySelector(".icons-section").classList.add("off");
    },
    () => {
      setIcon(<ImFolderOpen />);
      setIconS("ImFolderOpen");
      document.querySelector(".icons-section").classList.add("off");
    },
  ];

  const openIconSection = (e) => {
    e.preventDefault();
    document.querySelector(".icons-section").classList.remove("off");
  };

  const asd = ()=>{
    console.log(String(icon))
  }

  return (
    <>
      {user && (
        <main className="newnote-main" onClick={asd}>
          <form>
            <h2>NEW NOTE</h2>
            <button className="icon-selector" onClick={openIconSection}>
              {icon}
            </button>
            <input
              type="text"
              name="newnote-title"
              placeholder="Title"
              onChange={changeTitle}
            />
            <textarea placeholder="Description" onChange={changeDescription} />
          </form>
          <Button1 disabled={title.length === 0} onClick={handleSubmit}>
            CREATE
          </Button1>
          <BackPage />
          <FullScreenLoading />

          <section className="icons-section off">
            <div>
              <ImDroplet onClick={iconFunctions[0]} />
              <ImFeed onClick={iconFunctions[1]} />
              <ImAddressBook onClick={iconFunctions[2]} />
              <ImTicket onClick={iconFunctions[3]} />
              <ImPhone onClick={iconFunctions[4]} />
              <ImPushpin onClick={iconFunctions[5]} />
              <ImDatabase onClick={iconFunctions[6]} />
              <ImUserTie onClick={iconFunctions[7]} />
              <ImMug onClick={iconFunctions[8]} />
              <ImLeaf onClick={iconFunctions[9]} />
              <ImRocket onClick={iconFunctions[10]} />
              <ImPower onClick={iconFunctions[11]} />
              <ImCross onClick={iconFunctions[12]} />
              <ImCheckmark onClick={iconFunctions[13]} />
              <ImAppleinc onClick={iconFunctions[14]} />
              <ImClubs onClick={iconFunctions[15]} />
              <ImLibrary onClick={iconFunctions[16]} />
              <ImFolderOpen onClick={iconFunctions[17]} />
            </div>
            <strong>SELECT AN ICON</strong>
          </section>
          <Notification addClass="created" >Created!</Notification>
        </main>
      )}
    </>
  );
}
