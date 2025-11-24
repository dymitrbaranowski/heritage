import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <section class="wellcome">
          <div class="container">
            <h2 class="wellcome__heading">Хранители Наследия</h2>
          </div>
        </section>
      </main>
    </>
  );
}
