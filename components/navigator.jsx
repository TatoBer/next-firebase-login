import React from "react";
import { CgNotes } from "react-icons/cg";
import { BiPlusCircle } from "react-icons/bi";

export default function Navigator() {
  return (
    <nav className="home-nav">
      <a href="/notes">
        <CgNotes />
      </a>
      <a href="/newnote">
        <BiPlusCircle />
      </a>
    </nav>
  );
}
