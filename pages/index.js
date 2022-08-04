import Button1 from "../components/button1";
import { BsGithub } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FullScreenLoading from "../components/fullScreenLoading";

export default function Login() {
  const [user, setUser] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
  }, []);

  useEffect(() => {
    if (user) {
      router.replace("/home");
    } else if (user === null) {
      setTimeout(() => {
        document.querySelector(".full-screen-loading").classList.add("out");
      }, 150);
    }
  }, [user]);

  const handleGitHub = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => {
        console.error(err);
      });
  };

  const openLogins = () => {
    document.querySelector(".login-selector").classList.remove("out");
    console.log(user);
  };

  const closeLogins = () => {
    document.querySelector(".login-selector").classList.add("out");
  };

  return (
    <>
    <main className="login-main">
      <IoMdLogIn />
      <h1>LOGIN APP</h1>
      <p>
        Aplicacion de prueba para crear
        <br />
        logins con firebase!🔥
      </p>
      <Button1 onClick={handleGitHub}>LOGIN WITH <BsGithub /></Button1>
      <FullScreenLoading />
    </main>
    </>
  );
}
