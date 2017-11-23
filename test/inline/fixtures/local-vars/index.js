module.exports = function () {
    var name = 'Frank';
    var template = marko`
        <div>
            Hello ${name}!
        </div>`;

    return template.renderSync();
};