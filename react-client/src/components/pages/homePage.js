import React, { Component } from 'react';
import axios from 'axios';
var NumberFormat = require('react-number-format');
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos : []
    };
  }

  componentDidMount (){
    axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC&tsyms=USD")
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
    })
  }

  render() {
    //console.log(this.state.cryptos);
    return (
      <div className="Homepage section">
        <h1 className="homepage-intro">
          <strong>Selenne Berthely</strong> is a <strong>software engineer, interested in Data analysis </strong>&<strong> cryptocurrencies.</strong>
        <br/>
        <br/>
          <a href="https://linkedin.com/in/mthorry" target="_blank" rel="noopener noreferrer">Linked In</a>
        <br/>
          <a href="mailto:mthorry@gmail.com?Subject=Hello%20there!" target="_top"> <FontAwesomeIcon icon={faEnvelope} color="blue" transform="grow-8" /> </a>
        <br/>
          <a href="https://drive.google.com/open?id=1tL91tdN8pRoP71uhbUudg67T6zjUC0D1" target="_blank" rel="noopener noreferrer">
            <button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>

        {Object.keys(this.state.cryptos).map((key) => (
          <div id = "crypto_container">
            <span className = "left_span"> {key} </span>
            <span className = "right_span"> <NumberFormat value = {this.state.cryptos[key].USD} displayType = {"text"} decimalPrecision = {2} thousandSeparator = {true} prefix = {"$"}/> </span>
          </div>
        ))}

        </h1>
        <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgEAAAAJDZlMTFmOGNiLWNlMGMtNDZhZS04MTEyLWI0NTJiZDg0NDUxZg.jpg" className="main-pic"/>
      </div>
    );
  }
}


export default HomePage;
