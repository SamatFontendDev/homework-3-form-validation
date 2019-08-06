import React from 'react';

class LastNameError extends React.Component {
    render() {
        if (this.props.hasEror) {
            return null;
        } 

        return (
            <div className="field__error">
                <span className="field-error">Ошибка Фамилии!</span>
            </div>
        )
    }
}

export default LastNameError;