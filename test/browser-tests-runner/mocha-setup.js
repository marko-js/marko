if (window.initMochaPhantomJS === 'function') {
    window.initMochaPhantomJS();
}

window.mocha.ui('bdd');
window.mocha.reporter('html');

require('chai').config.includeStack = true;