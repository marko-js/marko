module.exports = function (done) {
    var name = 'Frank';
    var template = marko`
        <div>
            Hello ${name}!
        </div>`;

    return template.render(null, done);
};