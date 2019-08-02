import React from 'react'
import './Form.css'

class Form extends React.Component {
    render() {
        return (
            <div className="app-container">
                <form className="form">
                    <h1>Введите свои данные, агент</h1>
                    <p className="field">
                        <label htmlFor="first-name" className="field__label">
                            <span className="field-label">Имя</span>
                        </label>
                        <input id="first-name" className="t-input-firstname field-input" />
                        <div className="field__error">
                            <span className="field-error"></span>
                        </div>
                    </p>
                    <p className="field">
                        <label htmlFor="last-name" className="field__label">
                            <span className="field-label">Фамилия</span>
                        </label>
                        <input id="last-name" className="t-input-firstname field-input" />
                        <div className="field__error">
                            <span className="field-error"></span>
                        </div>
                    </p>
                    <p className="field">
                        <label htmlFor="passwod" className="field__label">
                            <span className="field-label">Пароль</span>
                        </label>
                        <input id="passwod" className="t-input-firstname field-input" />
                        <div className="field__error">
                            <span className="field-error"></span>
                        </div>
                    </p>
                    <div className="form__buttons">
                        <button className="button" type="submit">проверить</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form