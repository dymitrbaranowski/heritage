const now = new Date();
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
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
          <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </nav>
      </div>
    </header>
  );
}
