module.exports = function () {
    var name = 'Frank';
    var template = marko`
        div
            -- Hello ${name}!
        span -- Test
        `;

    return template.renderSync();
};