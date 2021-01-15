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
          <table>
            <tbody>
              <tr>
               <th>Kanji</th>
               <th>On'yomi</th>
               <th>Kun'yomi</th>
               <th>Meanings</th>
              <th>JLPT Level</th>
              </tr>
              <tr>
                <td>
                  {this.state.kanji.kanji}
                </td>
                <td>
                  {this.state.kanji.onyomi}
                </td>
                <td>
                  {this.state.kanji.kunyomi}
                </td>
                <td>
                  {this.state.kanji.meanings}
                </td>
                <td>
                  {this.state.kanji.jlpt}
                </td>
            </tr>
            </tbody>
          </table>
        </div>
      );
    }

}