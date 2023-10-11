import BooksRoute from "./components/Books/BooksRoute";
import InvalidRoute from "./components/InvalidRoute";
import Home from "./components/Home";
import "./styles.css";
import { NavLink, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BooksRoute />} />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </div>
  );
}
