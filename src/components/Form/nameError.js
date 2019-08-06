import React from 'react';

class NameError extends React.Component {
    render() {
        if (this.props.hasEror) {
            return null;
        } 

        return (
            <div className="field__error">
                <span className="field-error">Ошибка имени!</span>
            </div>
        )
    }
}

export default NameError;