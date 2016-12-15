var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');

ReactDOM.render(
    <App name='Frank' colors={['red', 'green', 'blue']}/>,
    document.body);