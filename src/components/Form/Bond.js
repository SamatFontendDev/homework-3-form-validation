import React from 'react'
import BondImg from './assets/bond_approve.jpg'

class Bond extends React.Component {
    render() {
        if (this.props.hasEror) {
            return null;
        } 

        return (
            <div>
               <img src={BondImg}>
            </div>
        )
    }
}

export default Bond;