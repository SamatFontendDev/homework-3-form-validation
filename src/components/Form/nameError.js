import React from 'react';

class NameError extends React.Component {
    render() {
        if (this.props.hasError.empty && this.props.hasError.conformity) {
            return null
        }
        else if (this.props.hasError.empty === false) {
            return (
                <div className="field__error">
                    <span className="t-error-firstname field-error">Введите имя!</span>
                </div>
            )
        }
        else if (this.props.hasError.conformity === false) {
            return (
                <div className="field__error">
                    <span className="t-error-firstname field-error">Имя неверно!</span>
                </div>
            )
        }
    }
}

export default NameError;