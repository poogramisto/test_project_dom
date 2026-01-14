
export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrap">
                <div className="header__logo-menu">
                    <img src="src/assets/svg/header__logo_menu.svg" />
                </div>
                <div className="header__logo-homo">
                    <img src="src/assets/svg/header_logo_homo.svg" alt="Главная" />
                </div>
            </div>
            <button class="header__burger" aria-label="Бургер"></button>
        </header>
    )
}