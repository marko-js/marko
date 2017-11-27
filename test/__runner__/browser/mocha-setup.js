window.mocha.setup({
    ui: 'bdd',
    useColors: true,
    fullTrace: true,
    reporter: navigator.userAgent.includes('jsdom') ? 'spec' : 'html'
});
