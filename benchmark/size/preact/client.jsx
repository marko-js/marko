var preact = require('preact');
var h = preact.h;
var render = preact.render;
var App = require('./components/App');

render(
    <App name='Frank' colors={['red', 'green', 'blue']}/>,
    document.body);