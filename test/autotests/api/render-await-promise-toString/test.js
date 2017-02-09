var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));

    template.render({
            userPromise: new Promise((resolve, reject) => {
                setTimeout(function() {
                    resolve({name: 'John'});
                }, 10);
            })
        })
        .then((result) => {
            process.nextTick(() => {
                expect(result.toString()).to.equal('<div>Hello John!</div>');
                done();
            });
        });


};