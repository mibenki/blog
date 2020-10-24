import React from 'react';
import './Menu.css';
import Burger from './Burger.js';
import { NavLink, Link } from 'react-router-dom';
import MenuPage from './MenuPage.js';
import Button from './Button.js';
import Form from './Form.js';


class Menu extends React.Component {

    state = {
        open: false,
        open2: false
    };

    setOpen = () => {
        this.setState({
            open: !this.state.open
        })
    };

    setOpen2 = () => {
        this.setState({
            open2: !this.state.open2
        })
    };

    render() {

        const conditonalStyle = { transform: this.state.open ? "rotate(180deg)" : "rotate(0)" };

        return (
            <div>
                <div className="Menu">
                    <NavLink to="../fashion">Fashion</NavLink>
                    <NavLink to="../lifestyle">LifeStyle</NavLink>
                    <NavLink to="../closet">My Closet</NavLink>
                </div>
                <div className="Menu_mobile_try">
                    <div className="Header_container">
                        <Link className="title" to="/">Mi Benki</Link>
                        <div onClick={this.setOpen} className="follow_button" >follow me</div>
                    </div>

                    {this.state.open2 ? <MenuPage setOpen={this.setOpen2} setOpen2={this.setOpen} /> : <Burger setOpen={this.setOpen2} />}
                </div>
                {this.state.open ? <FollowMe togglePop={this.setOpen} /> : null}
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


class NavBar extends React.Component {
    render() {
        const conditonalHeight = this.props.open ? { height: "6rem", padding: "1rem 0" } : { height: "0rem", padding: "0" };
        const conditonalColor = this.props.open ? {
            color: "#232323"
        } : { color: "transparent" };
        return (
            <div>
                <ul style={conditonalHeight}  >
                    <li><Link style={conditonalColor} to="../fashion">Fashion</Link></li>
                    <li><Link style={conditonalColor} to="../lifestyle">LifeStyle</Link></li>
                    <li><Link style={conditonalColor} to="../closet">My Closet</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;