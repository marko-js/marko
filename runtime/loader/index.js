if (process.env.BUNDLE) {
    // you cannot load templates dynamically within a bundle
    // all templates should be pre-compiled as part of the bundle
    module.exports = function(){};
} else {
    module.exports = require('./index-default');
}