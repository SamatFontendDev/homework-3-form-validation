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
        passwod: '',
        nameValid: true,
        lastNameValid: true,
        passwodValid: true
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.firstName.length && this.state.firstName === this.data.firstName) {
            this.setState({
                nameValid: true
            })
        }
        else {
            this.setState({
                nameValid: false
            })
        }
    }

    
    render() {
        const { firstName, lastName, passwod } = this.state;
        return (
            <div className="app-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1>Введите свои данные, агент</h1>
                    <div className="field">
                        <label htmlFor="first-name" className="field__label">
                            <span className="field-label">Имя</span>
                        </label>
                        <input
                            name="firstName"
                            id="first-name"
                            className="t-input-firstname field-input"
                            type="text"
                            value={firstName}
                            onChange={this.handleInput}
                        />
                        <NameError hasEror={this.state.nameValid} />
                    </div>
                    <div className="field">
                        <label htmlFor="last-name" className="field__label">
                            <span className="field-label">Фамилия</span>
                        </label>
                        <input
                            name="lastName" 
                            id="last-name" 
                            className="t-input-firstname field-input"
                            type="text"
                            value={lastName}
                            onChange={this.handleInput}
                        />
                        <div className="field__error">
                            <span className="field-error"></span>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="passwod" className="field__label">
                            <span className="field-label">Пароль</span>
                        </label>
                        <input
                            name="passwod"
                            id="passwod" 
                            className="t-input-firstname field-input" 
                            type="text"
                            value={passwod}
                            onChange={this.handleInput}
                        />
                        <div className="field__error">
                            <span className="field-error"></span>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <button className="button" type="submit">проверить</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form