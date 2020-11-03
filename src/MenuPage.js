import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './MenuPage.css';
import Button from './Button.js';
import Form from './Form.js';
import './Menu.css';


class MenuPage extends React.Component {

    state = {
        open2: false
    };


    setOpen2 = () => {
        this.setState({
            open2: !this.state.open2
        })
    };

    render() {
        return (
            <div className="MenuPage">
                <div className="Menu_mobile_try">
                    <div className="Header_container">
                        <Link className="title" to="/">Mi Benki</Link>
                        <div onClick={this.setOpen2} className="follow_button" >follow me</div>
                    </div>
                    <Close setOpen={this.props.setOpen} />
                </div>

                <div className="Menu_list">
                    {this.state.open2 ? <FollowMe togglePop={this.setOpen2} /> : null}
                    <Link className="Menu_list_item" onClick={this.props.setOpen} to="../">Home</Link>
                    <Link className="Menu_list_item" onClick={this.props.setOpen} to="../fashion">Fashion</Link>
                    <Link className="Menu_list_item" onClick={this.props.setOpen} to="../lifestyle">LifeStyle</Link>
                    <Link className="Menu_list_item" onClick={this.props.setOpen} to="../closet">My Closet</Link>
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

export default MenuPage;