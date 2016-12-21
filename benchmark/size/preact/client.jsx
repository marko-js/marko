import { h, render } from 'preact';

var App = require('./components/App');

render(
    <App name='Frank' colors={['red', 'green', 'blue']}/>,
    document.body);