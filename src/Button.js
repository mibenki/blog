import React from 'react';
import './Button.css';



class Button extends React.Component {
    render() {
        return (
            <a
                className="Button"
                href={this.props.link}
                target="_blank"
            ><div className="link">
                    {this.props.text}
                </div>
            </a >
        );
    }
}

export default Button;