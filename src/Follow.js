import React from 'react';
import './Follow.css';
import Form from './Form.js';
import ins from './images/ins3.png';

class Follow extends React.Component {
    tooglePop = () => {
        this.props.pop()
    }
    render() {
        return (
            <div className="modal" >
                <div className="close" onClick={this.tooglePop}>+</div>
                <div className="Medias">
                    <a href="./"><img src={ins} /></a>
                    <a href="./"><img src={ins} /></a>
                </div>
                <p>Subscribe for updates!</p>
                <Form className="FollowForm" onSubmit={this.props.onSubmit} />
            </div>
        );
    }
}


export default Follow;