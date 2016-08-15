module.exports = function() {
    var name = 'Frank';

    var template1 = marko`
        test-foo
        test-foo`;

    var template2 = marko`
        test-bar
        test-bar`;

    return template1.renderSync() + '\n' + template2.renderSync();
};