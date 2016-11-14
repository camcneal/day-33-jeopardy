import Backbone from 'backbone';
import React from 'react';
import {Link} from 'react-router';
import Nav from './nav';
import store from '../store';
import Answer from './Answer';
import Ul from './columns';
import Score from './score';

export default React.createClass({
  getInitialState(){
    return{
      cates: store.cates.toJSON()
    }
  },
componentWillMount(){
    store.cates.customGet();
    store.cates.on('update change',()=>{
      this.setState({
        cates:store.cates.toJSON()
      });
    });

  },
    render(){
      let categories;
    if(this.state.cates.length === 6){
        categories =  this.state.cates.map((category,i,arr) => {
            return <Ul title={category.title} clues={category.clues} key={i}/>
      })
    }

    return(
      <div>
          <Nav />
          {categories}
          <Answer  />
          <Score />
        </div>
    )
  }
});
