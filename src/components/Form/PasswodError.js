import React from 'react';

class PasswodError extends React.Component {
    render() {
        if (this.props.hasEror) {
            return null;
        } 

        return (
            <div className="field__error">
                <span className="field-error">Ошибка Пароля!</span>
            </div>
        )
    }
}

export default PasswodError;