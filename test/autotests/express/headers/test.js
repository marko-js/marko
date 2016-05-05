exports.createApp = function(express, markoExpress) {
    var app = express();

    markoExpress.injectInto(express);

    app.locals.foo = 'FOO';

    app.use(function(req, res, next) {
        res.locals.bar = 'BAR';
        next();
    });

    return app;
};

exports.createController = function(template) {
    return function(req, res) {
        res.marko(template);
    };
}

exports.checkResponse = function(response, expect, helpers) {
    expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    expect(response.body).to.equal('<div></div>');
}
