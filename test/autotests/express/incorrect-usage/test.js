exports.createApp = function(express, markoExpressPath) {
    require(markoExpressPath);

    var app = express();

    return app;
};

exports.createController = function(template) {
    return function(req, res) {
        res.marko('home');
    };
}

exports.checkResponse = function(response, expect, helpers) {
    expect(response.statusCode).to.equal(500);
    expect(response.body).to.include('res.marko');
    expect(response.body).to.include('res.render');
}
