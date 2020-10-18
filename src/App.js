import React from 'react';
import Form from './Form.js';
import './App.css';
import { Route } from "react-router";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Header from './Header.js';
import Article from './Article.js';
import Footer from './Footer.js';
import Pins from './Pins.js';
import testData from './outfits.json';
import Button from './Button.js';
import testData2 from './Articles.json';
import ArticlePage from './ArticlePage.js';
import PageNotFound from './PageNotFound.js';
import Menu from './Menu.js';


class App extends React.Component {
  addNewEmail = (emailData) => {
  };

  state = {
    from: "insta"
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/insta" render={() => (<Insta />)} />
          <Route path="/closet" render={() => (<Closet />)} />
          <Route path="/fashion" render={() => (<Articles category="fashion" />)} exact />
          <Route path="/lifestyle" render={() => (<Articles category="lifestyle" />)} exact />
          <Route path="/:category/articles/:id" render={() => (<ArticlePage />)} />
          <Route path="/" component={Blog} exact />
          <Route component={PageNotFound} />
        </Switch>
      </Router >
    );
  }
}

class Insta extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Form-container">
          <div className="Center">
            <Button link="https://www.pinterest.co.uk/mibenki/" text="Pinterest" />
            <Button link="./" text="Blog" />
            <p>Subscribe for updates!</p>
            <Form onSubmit={this.addNewEmail} />
          </div>
        </div>
      </div>
    );
  }
}


class Blog extends React.Component {
  render() {
    let main = testData2.filter(article => article.main === 1);
    return (
      <div className="App">
        <Header onSubmit={this.addNewEmail} />
        <Menu />
        {main.map(article => <Article key={article.id} {...article} />)}

        <Footer />
      </div >
    );
  }
}



class Closet extends React.Component {


  state = {
    items: testData
  };

  render() {
    return (
      <div className="App">
        <Header onSubmit={this.addNewEmail} />
        <Menu />
        {/*OutfitMap and how to keep track*/}
        <Pins items={this.state.items} />
        <Footer />
      </div >
    );
  }
}


class Articles extends React.Component {
  render() {
    let filtered = testData2.filter(article => article.category === this.props.category.toUpperCase());
    return (
      <div className="App">
        <Header onSubmit={this.addNewEmail} />
        <Menu />
        {filtered.map(article => <Article key={article.id} {...article} />)}/>}
        <Footer />
      </div >
    );
  }
}


export default App;
