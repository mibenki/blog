import React from 'react';
import './Article.css';
import logo from './images/outfit1.jpg';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class ArticleRender extends React.Component {



    render() {
        return (
            <div className="Article">
                <div className="SubArticle">
                    <div className="Title">{this.props.title}</div>
                    <div className="SubTitle">{this.props.match}</div>
                    <div className="center">
                        <div className="try">{this.props.category} | {this.props.date}</div>
                        <div className="photo"><a href="" target="_blank"><img src={require(`${this.props.src1}`)}></img></a></div>
                        <div className="photo2"><a href="" target="_blank"><img src={require(`${this.props.src2}`)}></img></a></div>
                    </div>
                    <Link className="readMore" to="/articles">Read More</Link>
                </div>
            </div>
        );
    }
}




export default withRouter(ArticleRender);
