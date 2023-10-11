import React from "react";
import { Link, Outlet } from "react-router-dom";

function BookLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="1">Book 1</Link>
            <br />
            <Link to="2">Book 2</Link>
            <br />
            <Link to="new">New Book</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ hello: "World" }} />
    </>
  );
}

export default BookLayout;
