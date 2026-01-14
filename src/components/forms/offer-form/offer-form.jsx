
const OfferForm = () => {
    return (
        <form className="form">
            <div className="form__text-wrap">
                <h2 className="form__title">Предложить актуальную тему или спикера на&nbsp;мероприятие</h2>
                <span className="form__text">Как региону стать участником пилотного проекта?</span>
            </div>
            <div className="form__field-wrap">
                <label htmlFor="name" className="sr-only">Фамилия, имя, отчество</label>
                <input 
                    className="form__field form__field--name"
                    type="text" 
                    id="name"
                    placeholder="Фамилия, имя, отчество" 
                />
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input 
                    className="form__field form__field--emeil"
                    type="email" 
                    id="email" 
                    placeholder="E-mail" 
                />
                <label htmlFor="telephone" className="sr-only">Телефон</label>
                <input 
                    className="form__field form__field--tel"
                    type="tel"
                    id="telephone" 
                    placeholder="Телефон" 
                />
                <label htmlFor="topic" className="sr-only">Ваша тема</label>
                <textarea 
                    className="form__field form__field--textarea"
                    type="text" 
                    id="topic"
                    rows="4"
                    placeholder="Ваша тема" 
                />
            </div>
                <label htmlFor="agreement" className="form__checkbox-label">
                    <input 
                        className="form__checkbox"
                        type="checkbox"
                        id="agreement"
                        checked
                    />
                    <span className="form__checkbox-text">
                        Согласен на
                        <a className="form__checkbox-link" href="#">
                            &nbsp;обработку персональных данных
                        </a>
                    </span>
                </label>
            <button className="form__button">Отправить</button>
        </form>
    )
}

export { OfferForm }