'use strict';
var AsyncStream = require('./AsyncStream');
var makeRenderable = require('../renderable');
var stream = require('stream');

class Readable extends stream.Readable {
    constructor(template, data, options) {
       super();
       this._t = template;
       this._d = data;
       this._shouldBuffer = !options || options.shouldBuffer !== false;
       this._rendered = false;
    }

    write(data) {
        if (data != null) {
            this.push(data);
        }
    }

    end() {
        this.push(null);
    }

    _read() {
        if (this._rendered) {
            return;
        }

        this._rendered = true;

        var template = this._t;
        var data = this._d;
        var globalData = data && data.$global;
        var shouldBuffer = this._shouldBuffer;
        var out = new AsyncStream(globalData, this, null, shouldBuffer);
        template.render(data, out);
        out.end();
    }
}

function Template(path, renderFunc, options) {
    this.path = path;
    this._ = renderFunc;
    this.___shouldBuffer = !options || options.shouldBuffer !== false;
    this.meta = undefined;
}

function createOut(globalData, parent, state, buffer) {
    return new AsyncStream(globalData, parent, state, buffer);
}

Template.prototype = {
    createOut: createOut,
    stream: function(data) {
        return new Readable(this, data, this._options);
    }
};

makeRenderable(Template.prototype);

module.exports = Template;
