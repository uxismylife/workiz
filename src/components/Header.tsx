import './Header.css'

/**
 * Header layout + sizes from Figma (node 60:28528):
 * https://www.figma.com/design/4fnW0vnl0IHcH5Ynb9g38w/Workiz?node-id=60-28528
 */
export default function Header() {
  return (
    <header className="header-shell">
      <div className="header-shell__gradient" aria-hidden />
      <div className="header-shell__bar">
        <div className="header__logo">
          <button type="button" className="header__icon-btn" aria-label="Menu">
            <img src="/elements/header/hamburger.svg" alt="" />
          </button>
          <div className="header__brand">
            <img
              src="/elements/header/Logo.svg"
              alt="OneVisit"
              className="header__logo-img"
            />
          </div>
        </div>

        <div className="header__nav-actions">
          <button type="button" className="header__icon-btn" aria-label="Search">
            <img src="/elements/header/search.svg" alt="" />
          </button>
          <div className="header__bell-wrap">
            <button type="button" className="header__icon-btn" aria-label="Notifications">
              <img src="/elements/header/bell.svg" alt="" />
            </button>
            <span className="header__badge" aria-hidden />
          </div>
          <div className="header__avatar">
            <img src="/elements/header/avatar.png" alt="User avatar" />
          </div>
        </div>
      </div>
    </header>
  )
}
