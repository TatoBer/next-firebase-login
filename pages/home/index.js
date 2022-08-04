import { useEffect, useState } from "react";
import FullScreenLoading from "../../components/fullScreenLoading";
import { onAuthStateChanged, logOut } from "../../firebase/client";
import { useRouter } from "next/router";
import LogOutButton from "../../components/logOutButton";

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

  const logUser = () => {
    console.log(user);
  };

  return (
    <>
      <main className="home-main">
        {user && (
          <>
            <img src={user.photoURL} alt="username" onClick={logUser} />
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
            <LogOutButton onClick={logOut} >LOG OUT</LogOutButton>
          </>
        )}
        <FullScreenLoading />
      </main>
    </>
  );
}
