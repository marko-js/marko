'use strict';

var safeVarName = require('./safeVarName');
var ok = require('assert').ok;

class MacrosContext {
    constructor() {
        this._byName = {};
    }

    isMacro(name) {
        if (!name) {
            return false;
        }

        if (name.type === 'Literal') {
            name = name.value;
        }

        return this._byName.hasOwnProperty(name);
    }

    getRegisteredMacro(name) {
        return this._byName[name];
    }

    registerMacro(name, params) {
        ok(name, '"name" is required');
        ok(typeof name === 'string', '"name" should be a string');
        if (params == null) {
            params = [];

        } else {
            ok(Array.isArray(params), '"params" should be an array');
        }


        var hasOut = false;
        var hasRenderBody = false;
        params.forEach((param) => {
            if (param === 'out') {
                hasOut = true;
            } else if (param === 'renderBody') {
                hasRenderBody = true;
            }
        });

        if (!hasOut) {
            params.push('out');
        }

        if (!hasRenderBody) {
            params.push('renderBody');
        }

        var paramIndexes = {};
        params.forEach((param, i) => {
            paramIndexes[param] = i;

            if (param === 'out') {
                hasOut = true;
            } else if (param === 'renderBody') {
                hasRenderBody = true;
            }
        });

        var functionName = 'macro_' + safeVarName(name);

        var macroDef = {
            name: name,
            params: params,
            functionName: functionName,
            getParamIndex: function(param) {
                return paramIndexes[param];
            }
        };

        this._byName[name] = macroDef;

        return macroDef;
    }
}

function createMacrosContext() {
    return new MacrosContext();
}

exports.createMacrosContext = createMacrosContext;