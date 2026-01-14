
const Graph = () => {
    return (
        <div className="graph">
            <h2 className="graph__title">График проведения мероприятий</h2>
            <ul className="graph__list">
                <li className="graph__item">
                    <span className="graph__text-smoll">Вебинар</span>
                    <h3 className="graph__text-big">Название мероприятия</h3>
                    <div className="graph__wrap">
                        <span className="graph__data">XX марта</span>
                        <a className="graph__link" href="#" alt="Подробнее">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 7.67216C17.0976 7.30094 17.0976 6.69906 16.7071 6.32784L10.3431 0.278417C9.95262 -0.0928057 9.31946 -0.0928057 8.92893 0.278417C8.53841 0.64964 8.53841 1.25151 8.92893 1.62273L13.5858 6.04942H1C0.447716 6.04942 0 6.47501 0 7C0 7.52499 0.447716 7.95058 1 7.95058H13.5858L8.92893 12.3773C8.53841 12.7485 8.53841 13.3504 8.92893 13.7216C9.31946 14.0928 9.95262 14.0928 10.3431 13.7216L16.7071 7.67216Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </li>
                <li className="graph__item">
                    <span className="graph__text-smoll">Круглый стол</span>
                    <h3 className="graph__text-big">Название мероприятия</h3>
                    <div className="graph__wrap">
                        <span className="graph__data">XX марта</span>
                        <a className="graph__link" href="#" alt="Подробнее">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 7.67216C17.0976 7.30094 17.0976 6.69906 16.7071 6.32784L10.3431 0.278417C9.95262 -0.0928057 9.31946 -0.0928057 8.92893 0.278417C8.53841 0.64964 8.53841 1.25151 8.92893 1.62273L13.5858 6.04942H1C0.447716 6.04942 0 6.47501 0 7C0 7.52499 0.447716 7.95058 1 7.95058H13.5858L8.92893 12.3773C8.53841 12.7485 8.53841 13.3504 8.92893 13.7216C9.31946 14.0928 9.95262 14.0928 10.3431 13.7216L16.7071 7.67216Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </li>
                <li className="graph__item">
                    <span className="graph__text-smoll">Стратегическая сессия</span>
                    <h3 className="graph__text-big">Развитие рынка индивидуального жилищного строительства</h3>
                    <div className="graph__wrap">
                        <span className="graph__data">25 апреля</span>
                        <a className="graph__link" href="#" alt="Подробнее">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 7.67216C17.0976 7.30094 17.0976 6.69906 16.7071 6.32784L10.3431 0.278417C9.95262 -0.0928057 9.31946 -0.0928057 8.92893 0.278417C8.53841 0.64964 8.53841 1.25151 8.92893 1.62273L13.5858 6.04942H1C0.447716 6.04942 0 6.47501 0 7C0 7.52499 0.447716 7.95058 1 7.95058H13.5858L8.92893 12.3773C8.53841 12.7485 8.53841 13.3504 8.92893 13.7216C9.31946 14.0928 9.95262 14.0928 10.3431 13.7216L16.7071 7.67216Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export { Graph }