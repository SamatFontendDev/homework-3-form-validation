import React from 'react';

class LastNameError extends React.Component {
    
    render() {
        if (this.props.hasError.empty && this.props.hasError.conformity) {
            return null
        }
        else if (this.props.hasError.empty === false) {
            return (
                <div className="field__error">
                    <span className="field-error">Введите фамилию!</span>
                </div>
            )
        }
        else if (this.props.hasError.conformity === false) {
            return (
                <div className="field__error">
                    <span className="field-error">Фамилия неверна!</span>
                </div>
            )
        }
    }
    
}

export default LastNameError;