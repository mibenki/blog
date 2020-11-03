import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button.js';
import Form from './Form.js';


class Header extends React.Component {

    state = {
        open: false
    };

    togglePop = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        return (
            <div className="Header">
                <div className="Header_top">
                    <div className="Header-top-container">
                        <Link className="title" to="/">Mi Benki</Link>
                        <div onClick={this.togglePop} className="follow_button" >follow me</div>
                        <NavLink activeClassName="underline" className="navlink" to="../fashion">Fashion</NavLink>
                        <NavLink activeClassName="underline" className="navlink" to="../lifestyle">LifeStyle</NavLink>
                        <NavLink activeClassName="underline" className="navlink" to="../closet">My Closet</NavLink>
                    </div>
                    {this.state.open ? <FollowMe togglePop={this.togglePop} /> : null}
                </div>
            </div>
        );
    }
}


class FollowMe extends React.Component {
    render() {
        return (
            <div className="Form-container_Black">
                <div onClick={this.props.togglePop} className="close" >+</div>
                <div className="Center">
                    <p>Follow me on...</p>
                    <Button link="https://www.pinterest.co.uk/mibenki/" text="Pinterest" />
                    <Button link="https://www.instagram.com/mibenki/" text="Instagram" />
                    <p>Subscribe for updates!</p>
                    <Form onSubmit={this.addNewEmail} />
                </div>
            </div>
        );
    }
}




export default Header;
