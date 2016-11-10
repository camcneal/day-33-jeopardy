// import $ from 'jquery';
// import React from 'react';
// import session from '../models/Session';
// import {hashHistory, Link} from 'react-router';
//
// const Login = React.createClass({
//   closeModal: function() {
//     hashHistory.push('/');
//   },
//   loginUser: function(e) {
//     e.preventDefault();
//     let username = this.refs.username.value;
//     let password = this.refs.password.value;
//     session.save({
//       username: username,
//       password: password
//     }, {
//       success: function(model, response) {
//         window.localStorage.setItem('authtoken', response._kmd.authoken);
//         model.unset('password');
//         hashHistory.push('/');
//       },
//     },
//     error: function(response) {
//
//     }
//   });
// },
// render: function () {
//   return (
//     <form className="login-form" onSubmit={this.loginUser}>
//
//     }
//   )
// }
// })
