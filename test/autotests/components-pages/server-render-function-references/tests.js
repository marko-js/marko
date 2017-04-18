var path = require('path');

describe(path.basename(__dirname), function() {
    it('should initialize components correctly across async boundaries', function() {
        window.app.test();
    });
});
