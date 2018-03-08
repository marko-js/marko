exports.createApp = function(express, markoExpressPath) {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.use(markoExpress());

    return app;
};

exports.createController = function() {
    return function(req, res) {
        res.marko("home");
    };
};

exports.checkResponse = function(response, expect) {
    expect(response.statusCode).to.equal(500);
    expect(response.body).to.include("res.marko");
    expect(response.body).to.include("res.render");
};
