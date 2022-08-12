import React from "react";
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

export default function UniqieNoteComp({ nota }) {

  const timestamp = nota.createdAt.seconds
  const date = new Date(timestamp * 1000)
  const dateString = `Created: ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

  return (
    <>
    <div className="unique-note" key={nota.id}>
      <div>
        <h4>{nota.title}</h4>
        <p>{nota.description}</p>
        <time>{dateString}</time>
      </div>

      {nota.icon === "ImDroplet" ? (
        <ImDroplet />
      ) : nota.icon === "ImFeed" ? (
        <ImFeed />
      ) : nota.icon === "ImAddressBook" ? (
        <ImAddressBook />
      ) : nota.icon === "ImTicket" ? (
        <ImTicket />
      ) : nota.icon === "ImPhone" ? (
        <ImPhone />
      ) : nota.icon === "ImPushpin" ? (
        <ImPushpin />
      ) : nota.icon === "ImDatabase" ? (
        <ImDatabase />
      ) : nota.icon === "ImUserTie" ? (
        <ImUserTie />
      ) : nota.icon === "ImMug" ? (
        <ImMug />
      ) : nota.icon === "ImLeaf" ? (
        <ImLeaf />
      ) : nota.icon === "ImRocket" ? (
        <ImRocket />
      ) : nota.icon === "ImPower" ? (
        <ImPower />
      ) : nota.icon === "ImCross" ? (
        <ImCross />
      ) : nota.icon === "ImCheckmark" ? (
        <ImCheckmark />
      ) : nota.icon === "ImAppleinc" ? (
        <ImAppleinc />
      ) : nota.icon === "ImClubs" ? (
        <ImClubs />
      ) : nota.icon === "ImLibrary" ? (
        <ImLibrary />
      ) : (
        nota.icon === "ImFolderOpen" && <ImFolderOpen />
      )}
    </div>
    </>
  );
}
