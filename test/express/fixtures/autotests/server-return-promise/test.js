'use strict';

let fulfilled = false;

exports.createApp = function (express, markoExpressPath) {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.use(markoExpress());
    return app;
};

exports.createController = function (template) {
    return function (req, res) {
        return res.marko(template).then(() => {
            fulfilled = true;
        }).catch(err => {
            console.error('Error fulfilling res.marko: ', err);
        });
    };
};

exports.checkResponse = function (response, expect, helpers) {
    expect(fulfilled).to.equal(true);
    expect(response.body).to.equal('<div></div>');
};