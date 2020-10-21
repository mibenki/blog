import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './MenuPage.css';


class MenuPage extends React.Component {


    render() {


        return (
            <div className="MenuPage">
                <Close setOpen={this.props.setOpen} />
                <div className="Menu_list">
                    <Link className="Menu_list_item" to="../fashion">Fashion</Link>
                    <Link className="Menu_list_item" to="../lifestyle">LifeStyle</Link>
                    <Link className="Menu_list_item" to="../closet">My Closet</Link>
                </div>
                <ul >
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}
class Close extends React.Component {
    render() {
        return (
            <div className="closeMenuPage" onClick={this.props.setOpen}>+
            </div>
        );
    }
}
export default MenuPage;