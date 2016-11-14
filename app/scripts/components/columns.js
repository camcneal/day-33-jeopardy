import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';
import _ from 'underscore';
import Modal from './Modal';

export default React.createClass({
  getInitialState() {
    return {
      showModal: false,
      two:_.where(this.props.clues,{value:200})[Math.floor(Math.random()*_.where(this.props.clues,{value:200}).length)],
      four:_.where(this.props.clues,{value:400})[Math.floor(Math.random()*_.where(this.props.clues,{value:400}).length)],
      six:_.where(this.props.clues,{value:600})[Math.floor(Math.random()*_.where(this.props.clues,{value:600}).length)],
      eight:_.where(this.props.clues,{value:800})[Math.floor(Math.random()*_.where(this.props.clues,{value:800}).length)],
      thousand:_.where(this.props.clues,{value:1000})[Math.floor(Math.random()*_.where(this.props.clues,{value:1000}).length)]
    };
  },
  showQuestion(e) {
    if (e.target.textContent === '$200') {
      this.setState({
        showModal: !this.state.showModal,
        currQuestion: this.state.two
      })
    } else if (e.target.textContent === '$400') {
      this.setState({
        showModal: !this.state.showModal,
        currQuestion: this.state.four
      })
    } else if (e.target.textContent === '$600') {
      this.setState({
        showModal: !this.state.showModal,
        currQuestion: this.state.six
      })
    } else if (e.target.textContent === '$800') {
      this.setState({
        showModal: !this.state.showModal,
        currQuestion: this.state.eight
      })
    } else if  (e.target.textContent === '$1000') {
      this.setState({
        showModal: !this.state.showModal,
        currQuestion: this.state.thousand
      })
    }
  },
  render(){
    let modal;
    if(this.state.showModal) {
      modal = <Modal question={this.state.currQuestion}/>
    }

    console.log(this.state);
  //   console.log(_.where(this.props.clues,{value:200})[Math.floor(Math.random()*_.where(this.props.clues,{value:200}).length)]);
  // console.log(Math.floor(Math.random()*_.where(this.props.clues,{value:200}).length));
    return(
          <ul className="categories">
              <h3>{this.props.title}</h3>
              <li onClick={this.showQuestion}>${this.state.two.value}</li>
              <li onClick={this.showQuestion}>${this.state.four.value}</li>
              <li onClick={this.showQuestion}>${this.state.six.value}</li>
              <li onClick={this.showQuestion}>${this.state.eight.value}</li>
              <li onClick={this.showQuestion}>${this.state.thousand.value}</li>
              {modal}
          </ul>
    )
  }
});
