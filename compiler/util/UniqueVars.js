'use strict';

function safeVarName(varName) {

    var parts = varName.split(/[\\/]/);
    if (parts.length >= 2) {
        // The varname looks like it was based on a path.
        // Let's just use the last two parts
        varName = parts.slice(-2).join('_');
    }

    return varName.replace(/[^A-Za-z0-9_]/g, '_').replace(/^[0-9]+/, function(match) {
        var str = '';
        for (var i=0; i<match.length; i++) {
            str += '_';
        }
        return str;
    });
}

class UniqueVars {
    constructor() {
        this.vars = {};
    }

    addVar(name, value) {
        if (typeof value !== 'string') {
            // Convert the non-string value into a string for easy comparison
            value = JSON.stringify(value);
        }

        name = safeVarName(name);

        var entry = this.vars[name];
        if (entry) {
            var vars = entry.vars;

            // See if there is already a variable with the requested value
            for (var i=0; i<vars.length; i++) {
                var curVar = vars[i];
                if (curVar.value === value) {
                    return curVar.name;
                }
            }

            entry.vars.push({
                name: name + (++entry.counter),
                value: value
            });
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