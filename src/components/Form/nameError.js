import React from 'react';

class NameError extends React.Component {
    render() {
        if (this.props.hasEror.empty && this.props.hasEror.conformity) {
            return null;
        } else if (this.props.empty === false) {
            return (
                <div className="field__error">
                    <span className="field-error">Ошибка имени!</span>
                </div>
            )
        } else if (this.props.conformity) {
            return (
                <div className="field__error">
                    <span className="field-error">Ошибка совпадения!</span>
                </div>
            )
        }
        
    }
}

export default NameError;