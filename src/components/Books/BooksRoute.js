import React from "react";
import { Routes, Route } from "react-router-dom";
import BookLayout from "./BookLayout";
import BookList from "./BookList";
import Book from "./Book";
import BookNew from "./BookNew";

function BooksRoute() {
  return (
    <Routes>
      <Route element={<BookLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<BookNew />} />
      </Route>
    </Routes>
  );
}

export default BooksRoute;
