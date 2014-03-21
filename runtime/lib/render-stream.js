var stream;
var STREAM = 'stream';

var streamPath;
try {
    streamPath = require.resolve(STREAM);
} catch(e) {}

if (streamPath) {
    stream = require(streamPath);
}

module.exports = function(runtime) {

    if (!stream) {
        return function() {
            throw new Error('Module not found: stream');
        };
    }
    

    function Readable() {
        Readable.$super.call(this);
        this._args = arguments;
        this._rendered = false;
    }

    Readable.prototype = {
        write: function(data) {
            this.push(data);
        },
        end: function() {
            this.push(null);
        },
        _read: function() {
            if (this._rendered) {
                return;
            }

            this._rendered = true;

            var args = this._args;
            var templatePath = args[0];
            var data = args[1];

            var context = runtime.createContext(this);
            runtime.render(templatePath, data, context);
            context.end();
        }
    };

    require('raptor-util').inherit(Readable, stream.Readable);

    return function stream(templatePath, data) {
        return new Readable(templatePath, data);
    };
};