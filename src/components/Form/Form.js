/* eslint-disable max-statements */
import React from 'react'
import './Form.css'
import NameError from './nameError'
import LastNameError from './LastNameError'
import PasswodError from './PasswodError'


class Form extends React.Component {
    data = {
        firstName: 's',
        lastName: 'h',
        passwod: '1'
    }

    state = {
        firstName: '',
        lastName: '',
        passwod: '',
        nameValid: {
            empty: true,
            conformity: true
        },
        lastNameValid: true,
        passwodValid: true
    }

    
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

       this.setState({
            nameValid: {
                empty: true,
                conformity: true
            },
            lastNameValid: true,
            passwodValid: true
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.firstName.length) {
            this.setState({
                nameValid: {
                    empty: true
                }
            })
        } else if (this.state.firstName === this.data.firstName) {
            this.setState({
                nameValid: {
                    conformity: true
                }
            })
        }
        else {
            this.setState({
                nameValid: {
                    empty: false,
                    conformity: false
                }
            })
        }

        if (this.state.lastName.length && this.state.lastName === this.data.lastName) {
            this.setState({
                lastNameValid: true
            })
        }
        else {
            this.setState({
                lastNameValid: false
            })
        }

        if (this.state.passwod.length && this.state.passwod === this.data.passwod) {
            this.setState({
                passwodValid: true
            })
        }
        else {
            this.setState({
                passwodValid: false
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
                        <LastNameError hasEror={this.state.lastNameValid}/>
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
                        <PasswodError hasEror={this.state.passwodValid} />
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