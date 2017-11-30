window.mocha.setup({
    ui: 'bdd',
    useColors: true,
    fullTrace: true,
    reporter: /jsdom|Node\.js/.test(navigator.userAgent) ? 'spec' : 'html' // When switching to JSDom 11x please fix that regex.
});
