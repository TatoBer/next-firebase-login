import React from "react";

export default function LogOutButton({children, onClick}) {
  return <button onClick={onClick} class="your-button-logout">{children}</button>;
}
