exports.createApp = function(express, markoExpressPath) {
    require(markoExpressPath);

    var app = express();

    app.locals.foo = 'APP';
    app.locals.bar = 'APP';
    app.locals.baz = 'APP';

    app.use(function(req, res, next) {
        res.locals.foo = 'RES';
        res.locals.bar = 'RES';
        next();
    });

    return app;
};

exports.createController = function(template) {
    return function(req, res) {
        res.marko(template, { $global:{ foo:'DATA' }, test:'HELLO' });
    };
}
