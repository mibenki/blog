import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Categories.css';

const categories = [
    "fashion",
    "lifestyle"
]

class Categories extends React.Component {
    render() {

        let categoies_show = categories.filter(cat => cat != this.props.current);

        return (
            <div>
                <img className="page_title_img" alt={this.props.title} src={require(`./images/more_post.png`)}></img>
                <div className="Categories">
                    {categoies_show.map(cat => <NavLink className="navlink" to={`../${cat}`}>{cat}</NavLink>)}
                </div>
            </div>
        );
    }
}

export default Categories