
export const Questions = () => {
    return (
        <>
            <section className="questions">
                <h2 className="questions__title">Открытые вопросы</h2>
                <div className="questions__list">
                    <div className="questions__item">
                        <div className="questions__question">
                            Что такое стратегическая сессия?
                            <span className="questions__icon">+</span>
                        </div>
                    </div>
                    <div className="questions__item">
                        <div className="questions__question">
                            Конференция для участников рынка
                            <span className="questions__icon">+</span>
                        </div>
                    </div>
                    <div className="questions__item">
                        <div className="questions__question">
                            Цель проведения стратегических сессий?
                            <span className="questions__icon">+</span>
                        </div>
                    </div>
                    <div className="questions__item">
                        <div className="questions__question">
                            Кто может принять участие в&nbsp;стратегической сессии?
                            <span className="questions__icon">+</span>
                        </div>
                        <ul className="questions__list-points">
                            <li className="questions__point">Банки</li>
                            <li className="questions__point">Застройщики</li>
                            <li className="questions__point">Подрядные организации</li>
                            <li className="questions__point">Федеральные и региональные органы власти</li>
                            <li className="questions__point">Спикеры по актуальным темам</li>
                            <li className="questions__point">Производители строительных материалов</li>
                            <li className="questions__point">Логистические компании</li>
                            <li className="questions__point">Профессиональные ассоциации</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="contact">
                <h2 className="contact__title">
                    Задайте вопрос консультанту
                </h2>
                <p className="contact__text">
                    Вопросы по мероприятиям для участников рынка можно задать посредством электронной почты
                </p>
                <a href="mailto:dom@domrf.ru" className="contact__email">
                    dom@domrf.ru
                </a>
            </section>
        </>  
    );
};
