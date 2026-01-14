
const Archive = () => {
    return (
        <>
            <div className="archive">
                <h2 className="archive__title">Архив прошедших мероприятий</h2>
                <div className="archive__poster">
                    <img className="archive__poster-img" src="src/assets/images/archive_fon.webp" alt="" />
                    <div className="archive__link-wrap">
                        <a className="archive__link-survey" href="#">Пройти опрос</a>
                        <a className="archive__link-gallery">Фотоотчет</a>
                    </div>
                </div>
                <p className="archive__data">5.12.2022</p>
                <p className="archive__paragraph">Круглый стол</p>
                <h3 className="archive__subtitle">Развитие индивидуального жилищного строительства</h3>
                <ul className="archive__list">
                    <li className="archive__item">
                        <div className="archive__svg-wrap">
                            <img className="archive__svg" src="src/assets/svg/archive_svg.svg" width="24px" height="24px" />
                        </div>
                        <div className="archive__item-content">
                            <span className="archive__text">Стратегическая сессия свод 34, 12.09.2022</span>
                            <a className="archive__link-doc" href="#">DOC, 632.58 КБ</a>
                        </div>
                    </li>
                    <li className="archive__item">
                        <div className="archive__svg-wrap">
                            <img className="archive__svg" src="src/assets/svg/archive_svg.svg" width="24px" height="24px" />
                        </div>
                        <div className="archive__item-content">
                            <span className="archive__text">Программа мероприятия, 17.11.2022</span>
                            <a className="archive__link-doc" href="#">DOC, 632.58 КБ</a>
                        </div>
                    </li>
                    <li className="archive__item">
                        <div className="archive__svg-wrap">
                            <img className="archive__svg" src="src/assets/svg/archive_svg.svg" width="24px" height="24px" />
                        </div>
                        <div className="archive__item-content">
                            <span className="archive__text">Вебинар 214-ФЗ</span>
                            <a className="archive__link-doc" href="#">PDF, 632.58 КБ</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export { Archive }