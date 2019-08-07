/* eslint-disable max-statements */
import React from 'react'
import './Form.css'
import NameError from './nameError'
import LastNameError from './LastNameError'
import PasswodError from './PasswodError'
import BondImg from './assets/bond_approve.jpg'


class Form extends React.Component {
    data = {
        firstName: 'James',
        lastName: 'Bond',
        passwod: '007'
    }

    state = {
        firstName: '',
        lastName: '',
        passwod: '',
        nameValid: {
            empty: true,
            conformity: true
        },
        lastNameValid: {
            empty: true,
            conformity: true
        },
        passwodValid: {
            empty: true,
            conformity: true
        },
        allRight: false
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
            lastNameValid: {
                empty: true,
                conformity: true
            },
            passwodValid: {
                empty: true,
                conformity: true
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.firstName.length === 0) {
            this.setState({
                nameValid: {
                    empty: false
                }
            })
        }
        else if (this.state.firstName !== this.data.firstName) {
            this.setState({
                nameValid: {
                    conformity: false
                }
            })
        }

        if (this.state.lastName.length === 0) {
            this.setState({
                lastNameValid: {
                    empty: false
                }
            })
        }
        else if (this.state.lastName !== this.data.lastName) {
            this.setState({
                lastNameValid: {
                    conformity: false
                }
            })
        }

        if (this.state.passwod.length === 0) {
            this.setState({
                passwodValid: {
                    empty: false
                }
            })
        }
        else if (this.state.passwod !== this.data.passwod) {
            this.setState({
                passwodValid: {
                    conformity: false
                }
            })
        }

        if (this.state.firstName === this.data.firstName && this.state.lastName === this.data.lastName && this.state.passwod === this.data.passwod) {
            this.setState({
               allRight: true
            })
        } else {
            this.setState({
                allRight: false
             })
        }
    }

    
    render() {
        const { firstName, lastName, passwod } = this.state;
        return (
            <div className="app-container">
                {!this.state.allRight && <form className="form" onSubmit={this.handleSubmit}>
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
                        <NameError hasError={this.state.nameValid} />
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
                        <LastNameError hasError={this.state.lastNameValid}/>
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
                        <PasswodError hasError={this.state.passwodValid} />
                    </div>
                    <div className="form__buttons">
                        <button className="button" type="submit">проверить</button>
                    </div>
                </form>}
                {this.state.allRight && <div><img alt="James Bond" src={BondImg}/></div>}
            </div>
        )
    }
}

export default Form