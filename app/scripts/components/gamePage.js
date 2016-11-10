import React from 'react';
// import { Router, Route, hashHistory } from 'react-router';
import Categories from '../collections/categories';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <nav className="nav">
        <div>
          <input type="button" placeholder="RESTART">
        </div>
      </nav>
    )
  }
});
