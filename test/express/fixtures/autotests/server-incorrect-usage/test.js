exports.createApp = function (express, markoExpressPath) {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.use(markoExpress());

    return app;
};

exports.createController = function (template) {
    return function (req, res) {
        res.marko('home');
    };
};

exports.checkResponse = function (response, expect, helpers) {
    expect(response.statusCode).to.equal(500);
    console.log('response.body', response.body);
    expect(response.body).to.include('res.marko');
    expect(response.body).to.include('res.render');
};