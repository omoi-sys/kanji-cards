import React, { Component } from 'react';
import axios from 'axios'

export default class Card extends Component {
    state = {
        flip: false,
        kanji: [],
    }

    componentDidMount() {
        axios.get('https://omoi-sys.com:10000/find/').then(
        res => {
          const kanji = res.data;
          this.setState({kanji});
          console.log(kanji);
        }).catch(
          err => {
            console.log('Error: ' + err)
          }
        )
    }

    render() {
      return (
        <div>
          <div className="card">
            <h1>
              {this.state.kanji.kanji}
            </h1>
            <break></break>
            <h3>
              {this.state.kanji.onyomi}
            </h3>
            <break></break>
            <h3>
              {this.state.kanji.kunyomi}
            </h3>
            <break></break>
            <h3>
              JTLP level: {this.state.kanji.jlpt}
            </h3>
          </div>
        </div>
      );
    }

}