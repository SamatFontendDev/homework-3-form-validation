import React from 'react'
import './Form.css'
import NameError from './nameError'

class Form extends React.Component {
    data = {
        firstName: 'Samat',
        lastName: 'Khabibyllin',
        passwod: '123samat',
    }

    state = {
        firstName: '',
        lastName: '',
        passwod: ''
    }

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        })
    }

    handlePasswodChange = e => {
        this.setState({
            passwod: e.target.value
        })
    }

    handleSubmit = e => {
        e.prventDefault();
    }

    render() {
        const { firstName, lastName, passwod } = this.state;
        return (
            <div className="app-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Введите свои данные, агент</h1>
                    <p className="field">
                        <label htmlFor="first-name" className="field__label">
                            <span className="field-label">Имя</span>
                        </label>
                        <input
                            id="first-name"
                            className="t-input-firstname field-input"
                            type="text"
                            value={firstName}
                            onChange={this.handleFirstNameChange}
                        />
                        <NameError hasEror={this.state.firstName} />
                    </p>
                    <p className="field">
                        <label htmlFor="last-name" className="field__label">
                            <span className="field-label">Фамилия</span>
                        </label>
                        <input 
                            id="last-name" 
                            className="t-input-firstname field-input"
                            type="text"
                            value={lastName}
                            onChange={this.handleLastNameChange}
                        />
                        <div className="field__error">
                            <span className="field-error"></span>
                        </div>
                    </p>
                    <p className="field">
                        <label htmlFor="passwod" className="field__label">
                            <span className="field-label">Пароль</span>
                        </label>
                        <input 
                            id="passwod" 
                            className="t-input-firstname field-input" 
                            type="text"
                            value={passwod}
                            onChange={this.handlePasswodChange}
                        />
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