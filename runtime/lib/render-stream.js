module.exports = function(runtime) {

    var STREAM_MODULE = 'stream';

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

    require('raptor-util').inherit(Readable, require(STREAM_MODULE).Readable);

    return function stream(templatePath, data) {
        return new Readable(templatePath, data);
    };
};