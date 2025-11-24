import { Routes, Route, NavLink } from "react-router-dom";
// const now = new Date();
export default function Header() {
  return (
    <header class="header">
      <div class="container header__container">
        <a href="#main">
          <h1 class="logo">Хранители Наследия!</h1>
        </a>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/pictures">Pictures</NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/pictures" element={<div>Pictures</div>} />
            <Route
              path="/pictures/:pictureId"
              element={<div>Pictures element</div>}
            />
          </Routes>
        </nav>
      </div>
    </header>
  );
}
