import React from "react";

function Nav() {
  let str= "First project"
  return (
    <nav>
      <h1>{str}</h1>
      <ul style={{listStyle:"none"}}>
        <li>Home</li>
        <li>Contact</li>
        <li>Sign in </li>
        <li>Sin up</li>
      </ul>
    </nav>
  );
}

export default Nav;
