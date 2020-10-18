import React from 'react';
import './Menu.css';
import { NavLink, Link } from 'react-router-dom';


class Menu extends React.Component {

    state = {
        open: false
    };

    setOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        const conditonalStyle = { transform: this.state.open ? "rotate(180deg)" : "rotate(0)" };

        return (
            <div>
                <div className="Menu">
                    <NavLink to="../fashion">Fashion</NavLink>
                    <NavLink to="../lifestyle">LifeStyle</NavLink>
                    <NavLink to="../closet">My Closet</NavLink>
                </div>
                <div className="Menu_mobile">
                    <div className="MenuBar">
                        <p>Wander around</p>
                        <div className="openMenu" style={conditonalStyle} onClick={this.setOpen}>&or;</div>
                    </div>
                    <NavBar open={this.state.open} />
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