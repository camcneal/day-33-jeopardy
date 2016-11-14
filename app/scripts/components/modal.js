import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';

export default React.createClass({


  render(){

    let contentStyles = {
    background: 'blue',
    color: 'white',
    width: '500px',
    margin: '0 auto',
    height: '60vh',
    marginTop: '12.5%',
    overflow: 'scroll'}

    let containerStyles = {
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom:0,
      zIndex: 10,
      background: 'rgba(0,0,0,.5)'}


console.log(this.props);
    return(
      <div className="modal-container" style={containerStyles}>
          <div className="model-content" style={contentStyles}>
            <h3>{this.props.question.question}</h3>

          </div>
      </div>
    )
  }
})
