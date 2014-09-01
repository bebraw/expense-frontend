'use strict';
var React = require('react');

var Form = require('./form.jsx');


React.renderComponent(Form({language: 'en'}), document.getElementById('react-main'));
