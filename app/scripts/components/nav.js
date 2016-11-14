import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
  render(){
    return(
      <nav className="nav">
          <div>
            <input type="button" value="Restart"/>
          </div>
      </nav>
    )
  }
});
