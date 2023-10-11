import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const { hello } = useOutletContext();
  return (
    <div>
      Book {id} Hello {hello}
    </div>
  );
}

export default Book;
