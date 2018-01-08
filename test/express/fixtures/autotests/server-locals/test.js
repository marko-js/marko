exports.createApp = function (express, markoExpressPath) {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.locals.foo = 'FOO';

    app.use(markoExpress());
    app.use(function (req, res, next) {
        res.locals.bar = 'BAR';
        next();
    });

    return app;
};

exports.createController = function (template) {
    return function (req, res) {
        res.marko(template);
    };
};