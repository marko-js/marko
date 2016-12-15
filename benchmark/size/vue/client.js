var Vue = require('vue');
var App = require('./components/App');

// var app = new App({
//     el: document.body,
//     data: {
//         name: 'Frank',
//         colors: ['red', 'green', 'blue']
//     }
// });

new Vue({
    el: document.body,
    render: function (createElement) {
        return createElement(App);
    }
});