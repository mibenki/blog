import React from 'react';
import './Menu.css';
import Burger from './Burger.js';
import { NavLink, Link } from 'react-router-dom';
import MenuPage from './MenuPage.js';


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
                    {this.state.open2 ? <MenuPage setOpen={this.setOpen2} /> : <Burger setOpen={this.setOpen2} />}
                </div>
                {/*}              <div className="Menu_mobile">
                    <div className="MenuBar">
                        <p>Wander around</p>
                        <div className="openMenu" style={conditonalStyle} onClick={this.setOpen}>&or;</div>
                    </div>
                    <NavBar open={this.state.open} />
        </div>*/}
                {this.state.open2 ? null : null}
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