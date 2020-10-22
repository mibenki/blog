import React from 'react';
import './Pins.css';


class Pins extends React.Component {
    render() {
        let row1map = this.props.items.filter(item => item.col === 1);
        let row2map = this.props.items.filter(item => item.col === 2);
        let row3map = this.props.items.filter(item => item.col === 3);

        return (
            <div className="Pins_container">
                <img className="page_title_img" alt={this.props.title} src={require(`./images/${this.props.title}.png`)}></img>
                <div className="Pins" >
                    <div className="col">{row1map.map(item => <Item key={item.id} {...item} />)}</div>
                    <div className="col">{row2map.map(item => <Item key={item.id} {...item} />)}</div>
                    <div className="col">{row3map.map(item => <Item key={item.id} {...item} />)}</div>
                    <div className="col_mobile">{this.props.items.map(item => <Item key={item.id} {...item} />)}</div>
                </ div>
            </div>

        );
    }
}


class Item extends React.Component {

    render() {
        const item = this.props;
        return (
            <div className="Item">
                <img src={require(`${item.src}`)} />
            </div>
        );
    }
}


export default Pins;