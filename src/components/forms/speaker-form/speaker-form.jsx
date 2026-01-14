
export const SpeakerForm = () => {
    return (
        <form className="form">
            <div className="form__text-wrap">
                <h2 className="form__title">Стать спикером мероприятия</h2>
                <p className="form__text">
                    Станьте спикером наших мероприятий, заполнив форму ниже. Мы всегда открыты к сотрудничеству с новыми экспертами.
                    Наши спикеры — это состоявшиеся профессионалы и эксперты в сфере индивидуального жилищного строительства, готовые поделиться своими знаниями, подходами и наработками с другими участниками рынка.
                </p>
            </div>
            <div className="form__field-wrap">
                <label htmlFor="name" className="sr-only">Фамилия, имя, отчество</label>
                <input 
                    className="form__field form__field--name"
                    type="text" 
                    id="name"
                    placeholder="Фамилия, имя, отчество" 
                    required
                />
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input 
                    className="form__field form__field--email"
                    type="email" 
                    id="email" 
                    placeholder="E-mail" 
                    required
                />
                <label htmlFor="phone" className="sr-only">Телефон</label>
                <input 
                    className="form__field form__field--tel"
                    type="tel"
                    id="phone" 
                    placeholder="Телефон" 
                    required
                />
                <label htmlFor="company" className="sr-only">Организация</label>
                <input 
                    className="form__field form__field--company"
                    type="text" 
                    id="company" 
                    placeholder="Организация" 
                    required
                />
                <label htmlFor="event" className="sr-only">Выбрать мероприятие</label>
                {/* <select 
                    className="form__field form__field--select" 
                    id="event"
                    defaultValue=""
                    required
                >
                    <option value="" disabled>Выбрать мероприятие</option>
                    <option value="conference">Конференция по строительству</option>
                    <option value="forum">Форум экспертов</option>
                    <option value="webinar">Вебинар</option>
                </select> */}
                <label htmlFor="topic" className="sr-only">
                    Предлагаемая тема выступления с кратким описанием программы
                </label>
                <textarea
                    className="form__field form__field--textarea"
                    id="topic" 
                    placeholder="Предлагаемая тема выступления с кратким описанием программы"
                    required
                />
            </div>
            <div className="form__checkbox-wrap">
                <label htmlFor="agreement" className="form__checkbox-label">
                    <input 
                        className="form__checkbox"
                        type="checkbox"
                        id="agreement"
                        required
                    />
                    <span>
                        Согласен на <a className="form__checkbox-link" href="#">обработку персональных данных</a>
                    </span>
                </label>
            </div>
            <button type="submit" className="form__button">Отправить</button>
        </form>
    )
}