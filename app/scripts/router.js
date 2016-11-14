import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import gamePage from './components/gamePage';
import Answer from './components/Answer';


export default(

<Router history= {hashHistory}>
  <Route path='/' component={gamePage}>
  <Route path='/' component={Answer}/>
  </Route>
</Router>

);
