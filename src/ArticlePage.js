import React from 'react';
import { withRouter } from 'react-router';
import testData2 from './Articles.json';
import "./ArticlePage.css";
import { Link } from 'react-router-dom';

class ArticlePage extends React.Component {

    render() {
        let article = testData2.filter(article => article.id === this.props.match.params.id);
        return (
            <div>
                {article.map(article => <FullArticle key={article.id} {...article} />)}
            </div>
        );
    }
}


class FullArticle extends React.Component {
    render() {
        return (
            <div className="FullArticle">
                <Link to="../" className="close">+</Link>
                <div className="Title">{this.props.title}</div>
                <div className="Category">{this.props.category} / {this.props.date}</div>
                <div className="Date"></div>

                <div className="article_images">
                    <img src={require(`${this.props.src1}`)}></img>
                    {this.props.array.map(function (e) {
                        let test = e.map(function (f) {
                            return (
                                <div>
                                    <img src={require(`${f}`)}></img>
                                </div>
                            );
                        })
                        return (
                            < div className="epaisseur">
                                {test}
                            </div>
                        );
                    })
                    }
                </div>

            </div >

        );
    }
}


class Image extends React.Component {
    render() {
        return (
            <div>
                <img src={require(`${this.props.article}`)}></img>
            </div>
        );
    }
}


export default withRouter(ArticlePage);