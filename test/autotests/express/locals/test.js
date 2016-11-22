exports.createApp = function(express, markoExpressPath) {
    require(markoExpressPath);

    var app = express();

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
