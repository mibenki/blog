import React from 'react';
import './Footer.css';
import pin from './images/pn3.png';
import ins from './images/ins3.png';
import InstaFeed from './Insta.json';


class Footer extends React.Component {


    render() {
        let instafeed = InstaFeed.slice(0, 3);


        if (document.documentElement.clientWidth > 600) {
            instafeed = InstaFeed.slice(0, 5);
            console.log(document.documentElement.clientWidth);
        }
        return (
            <div className="Footer">
                <h2>Instagram</h2>
                <p> FOLLOW <a href="https://www.instagram.com/mibenki" target="_blank">@MIBENKI</a></p>
                <div className="feed">
                    {instafeed.map(i => <InstaPost key={i.link} {...i} />)}
                </div>
                <div className="media">
                    <p>MIBENKI &copy; 2020</p>
                    <div className="Medias">
                        <a href="https://www.pinterest.co.uk/mibenki/" target="_blank"><img src={pin} /></a>
                        <a href="https://www.instagram.com/mibenki/" target="_blank"><img src={ins} /></a>
                    </div>
                </div>
            </div>
        );
    }
}


class InstaPost extends React.Component {

    render() {
        return (
            <div className="InstaPost">
                <a href={this.props.link} target="_blank" ><img src={require(`${this.props.src}`)}></img></a>
            </div>
        );
    }
}




export default Footer;