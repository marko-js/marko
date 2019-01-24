"use strict";

var safeVarName = require("./safeVarName");
var ok = require("assert").ok;

class MacrosContext {
    constructor() {
        this._byName = {};
    }

    isMacro(name) {
        if (!name) {
            return false;
        }

        if (name.type === "Literal") {
            name = name.value;
        }

        return this._byName.hasOwnProperty(name);
    }

    getRegisteredMacro(name) {
        return this._byName[name];
    }

    registerMacro(name) {
        ok(name, '"name" is required');
        ok(typeof name === "string", '"name" should be a string');
        var functionName = "macro_" + safeVarName(name);
        var macroDef = {
            name: name,
            functionName: functionName
        };

        this._byName[name] = macroDef;

        return macroDef;
    }
}

function createMacrosContext() {
    return new MacrosContext();
}

exports.createMacrosContext = createMacrosContext;
