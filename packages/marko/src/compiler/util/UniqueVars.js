"use strict";

var safeVarName = require("./safeVarName");

class UniqueVars {
    constructor() {
        this.vars = {};
    }

    addVar(name, value) {
        if (typeof value !== "string") {
            // Convert the non-string value into a string for easy comparison
            value = JSON.stringify(value);
        }

        name = safeVarName(name);

        var entry = this.vars[name];
        if (entry) {
            var vars = entry.vars;

            // See if there is already a variable with the requested value
            for (var i = 0; i < vars.length; i++) {
                var curVar = vars[i];
                if (curVar.value === value) {
                    return curVar.name;
                }
            }

            let newEntry = {
                name: name + ++entry.counter,
                value: value
            };

            entry.vars.push(newEntry);
            return newEntry.name;
        } else {
            entry = {
                vars: [
                    {
                        name: name,
                        value: value
                    }
                ],
                counter: 1
            };

            this.vars[name] = entry;
        }

        return name;
    }
}

module.exports = UniqueVars;
