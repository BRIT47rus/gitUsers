import './Header.css';
export default function Header() {
  return (
    <section className="header-container">
      <h1 className="header__title">Пользователи гитхаба</h1>
      <div className="header__search-container">
        <div className="header__input-container">
          <input type="text" className="header__input" />
        </div>
        <div className="header__btn-container">
          <button className="header__btn">НАЙТИ</button>
        </div>
      </div>
    </section>
  );
}
