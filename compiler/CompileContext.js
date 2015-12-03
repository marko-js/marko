'use strict';

var ok = require('assert').ok;
var path = require('path');
var taglibLookup = require('./taglib-lookup');
var charProps = require('char-props');
var deresolve = require('./util/deresolve');
var UniqueVars = require('./util/UniqueVars');
var PosInfo = require('./util/PosInfo');

class CompileContext {
    constructor(src, filename, builder) {
        ok(typeof src === 'string', '"src" string is required');
        ok(filename, '"filename" is required');

        this.src = src;
        this.filename = filename;
        this.builder = builder;

        this.dirname = path.dirname(filename);
        this.taglibLookup = taglibLookup.buildLookup(this.dirname);
        this.data = {};

        this._staticVars = {};
        this._uniqueVars = new UniqueVars();
        this._srcCharProps = null;
        this._flags = {};
    }

    getPosInfo(pos) {
        var srcCharProps = this._srcCharProps || (this._srcCharProps = charProps(this.src));
        let line = srcCharProps.lineAt(pos)+1;
        let column = srcCharProps.columnAt(pos);
        return new PosInfo(this.filename, line, column);
    }

    setFlag(name) {
        this._flags[name] = true;
    }

    clearFlag(name) {
        delete this._flags[name];
    }

    isFlagSet(name) {
        return this._flags.hasOwnProperty(name);
    }

    addError(node, message) {
        throw new Error('addError() not fully implemented. Error: ' + message); // TODO
    }

    getRequirePath(targetFilename) {
        return deresolve(targetFilename, this.dirname);
    }

    addStaticVar(name, init) {
        var actualVarName = this._uniqueVars.addVar(name, init);
        this._staticVars[actualVarName] = init;
        return actualVarName;
    }

    getStaticVars() {
        return this._staticVars;
    }
}

module.exports = CompileContext;