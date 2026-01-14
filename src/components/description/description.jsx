
const Description = () => {
    return (
        <>
            <div className="description__wrap">
                <h1 className="description__title">
                    Мероприятия для участников рынка по&nbsp;развитию ИЖС
                </h1>
                <span className="description__text">
                    ДОМ.РФ как институт развития в&nbsp;жилищной сфере проводит мероприятия по&nbsp;продвижению индивидуального жилищного строительства для участников рынка: застройщиков, подрядчиков, производителей, кредиторов
                </span>
            </div>
            <div className="description__img">
                <img src="src/assets/images/description__img.webp" width="288px" height="160px"/>
            </div>
            <div className="description__list-wrap">
                <h2 className="description__list-title">Возможные форматы мероприятий:</h2>
                <ul className="description__list">
                    <li className="description__item">
                        <div className="description__item-block">
                            <img className="description__item-svg" src="src/assets/svg/description-item-svg.svg" width="20px" height="20px" />
                            <h3 className="description__item-title">Стратегическая сессия</h3> 
                        </div>
                        <span className="description__item-text">
                            Конференция с&nbsp;возможностью доклада для участников рынка, где формулируются текущие проблемы ИЖС и&nbsp;демонстрируются инструменты для их&nbsp;решения с&nbsp;целью масштабирования
                        </span>
                    </li>
                    <li className="description__item">
                        <div className="description__item-block">
                            <img className="description__item-svg" src="src/assets/svg/description-item-svg.svg" width="20px" height="20px" />
                            <h3 className="description__item-title">Круглый стол</h3> 
                        </div>
                        <span className="description__item-text">
                            Обсуждение с&nbsp;возможностью доклада с&nbsp;участниками рынка текущих проблем ИЖС, поиск потенциальных решений и&nbsp;необходимых изменений на&nbsp;уровне законодательства и&nbsp;практики реализации проектов строительства
                        </span>
                    </li>
                    <li className="description__item">
                        <div className="description__item-block">
                            <img className="description__item-svg" src="src/assets/svg/description-item-svg.svg" width="20px" height="20px" />
                            <h3 className="description__item-title">Вебинар</h3> 
                        </div>
                        <span className="description__item-text">
                            Презентация участникам рынка законодательных изменений, запуска новых программ финансирования и&nbsp;механизмов поддержки
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export { Description }