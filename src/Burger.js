import React from 'react';
import './Burger.css';


class Burger extends React.Component {


    render() {
        return (
            <div className="Burger" onClick={this.props.setOpen}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}


export default Burger;