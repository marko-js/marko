const isValidJavaScriptVarName = require('../../compiler/util/isValidJavaScriptVarName');

function getSpecifiers(importDeclaration) {
    var match = /^(.+)\bfrom\s*('.*'|".*")$/.exec(importDeclaration) ;

    if(!match) {
        return { moduleSpecifier: importDeclaration.trim() };
    }

    return {
        importSpecifierSet:match[1].trim(),
        moduleSpecifier:match[2].trim()
    };
}

function getImportSpecifierGroups(importSpecifierSet) {
    var defaultImport = importSpecifierSet;
    var decomposedImports = /(?:,\s*)?{(.*)}$/.exec(importSpecifierSet) || [];

    if(decomposedImports.length) {
        defaultImport = defaultImport.replace(decomposedImports[0], '');
        decomposedImports = decomposedImports[1].split(',').map(specifier => specifier.trim());
    }

    return {
        defaultImport:defaultImport,
        decomposedImports:decomposedImports
    };
}

function getVariableName(moduleSpecifier) {
    var withoutQuotes = /^(?:'|")(.*?)(?:'|")$/.exec(moduleSpecifier)[1] ;
    var withoutPath = /([^\/\\]+)$/.exec(withoutQuotes)[1];
    var withoutExtension = withoutPath.replace(/\.[a-z0-9]+$/i, '');
    return withoutExtension.replace(/[^a-z0-9]+([a-z])/gi, (_, p1) => p1.toUpperCase());
}

function getNames(importSpecifier) {
       var names = importSpecifier.split(/\bas\b/);

       if(names.length == 1) {
            names[1] = names[0];
       }

       return {
            exported:names[0].trim(),
            local:names[1].trim()
       };
}

function importToAssignments(importStatement) {
    var importDeclaration = importStatement.replace(/^import/, '');
    var specifiers = getSpecifiers(importDeclaration);
    var importSpecifierSet = specifiers.importSpecifierSet;
    var moduleSpecifier = specifiers.moduleSpecifier;

    if(!importSpecifierSet) {
        return ['require('+moduleSpecifier+')'];
    }

    var importGroups = getImportSpecifierGroups(importSpecifierSet);
    var rootVariable = getNames(importGroups.defaultImport).local || getVariableName(moduleSpecifier);
    var specifierList = importGroups.decomposedImports.map(getNames).map(names => {
        return {
            name:names.local,
            value: {
                object:rootVariable,
                property:names.exported
            }
        };
    });

    return [{ name:rootVariable, value:'require('+moduleSpecifier+')' }].concat(specifierList) ;
}

function importToAssignmentsWithTags(importStatement) {
    var assignments = importToAssignments(importStatement);
    return assignments.map((assignment, currentIndex) => {
        if(/^<.*>$/.test(assignment.name)) {
            var tagName = assignment.name;
            assignment.name = /^<(.*)>$/.exec(assignment.name)[1];
            assignment.isTag = true;

            for(var i = currentIndex+1; i < assignments.length; i++) {
                if(assignments[i].value.object === tagName) {
                    assignments[i].value.object = assignment.name;
                }
            }
        }

        return assignment;
    });
}

var resolveFrom = require('resolve-from');

module.exports = function nodeFactory(el, context) {
    var builder = context.builder;
    var args = importToAssignmentsWithTags(el.argument);
    var vars = {};

    args = args.map(arg => {
        if (typeof arg.value === "string") {
            // "require('./foo')"
            var value = builder.parseExpression(arg.value);
            var dirname = context.dirname;
            var path;
            try {
                path = resolveFrom(dirname, value.args[0].value);
            } catch(e) {
                context.addError('File not found: ' + path);
                return;
            }
            var result = builder.require(builder.literal(path));
            vars[arg.name] = result;
            context.addStaticVar(arg.name, result);
            return {
                id: builder.identifier(arg.name),
                init: result
            };
        } else {
            // { bar } from "./bar"
            var prop = vars[arg.value.object];
            if (!prop) {
                context.addError('Variable not found: ' + arg.value.object);
                return;
            }
            return {
                id: builder.identifier(arg.name),
                init: builder.memberExpression(
                    prop,
                    builder.identifier(arg.value.property)
                )
            };

        }
    });

    // var args = [ { name: 'bar', value: 'require("./bar")' } ]
    // var exp = {
    //     type: 'FunctionCall',
    //     callee: {
    //         type: 'Identifier',
    //         name: 'require' },
    //     args: [ {
    //         type: 'Literal',
    //         value: './bar' } ] };

    return builder.vars(args);
};
