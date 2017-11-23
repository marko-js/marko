exports.createApp = function (express, markoExpressPath) {
    var app = express();
    var markoExpress = require(markoExpressPath);

    app.locals.foo = 'APP';
    app.locals.bar = 'APP';
    app.locals.baz = 'APP';

    app.use(markoExpress());
    app.use(function (req, res, next) {
        res.locals.foo = 'RES';
        res.locals.bar = 'RES';
        next();
    });

    return app;
};

exports.createController = function (template) {
    return function (req, res) {
        res.marko(template, { $global: { foo: 'DATA' }, test: 'HELLO' });
    };
};