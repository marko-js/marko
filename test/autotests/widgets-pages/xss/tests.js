var path = require('path');
var expect = require('chai').expect;
var markoWidgets = require('marko/widgets');

describe(path.basename(__dirname), function() {


    it('should handle ending </script> tag', function(done) {
        markoWidgets.ready(function() {
            expect(window.fooWidget.state.evil).to.equal('</script><script>alert("hello")</script>');
            expect(window.fooWidget.widgetConfig.evil).to.equal('</script><script>alert("hello")</script>');
            done();
        });
    });
});