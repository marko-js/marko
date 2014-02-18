var runtime = require('../../');
var Context = runtime.Context;

function Writer(stream) {
    this.stream = stream;
}

Writer.prototype.write = function(data) {
    this.stream.push(data);
};

function Readable() {
    Readable.$super.call(this);
    this._args = arguments;
    this._rendered = false;
}

Readable.prototype = {
    _read: function() {
        if (this._rendered) {
            return;
        }

        this._rendered = true;
        var writer = new Writer(this);

        var args = this._args;
        var templatePath = args[0];
        var data = args[1];

        var context = new Context(writer);
        runtime.render(templatePath, data, context);
        var _this = this;

        context.on('end', function() {
            _this.push(null);
        });
    }
};

require('raptor-util').inherit(Readable, require('stream').Readable);

exports.stream = function(templatePath, data) {
    return new Readable(templatePath, data);
};