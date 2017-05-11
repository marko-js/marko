"use strict";

function getSpecifiers(importDeclaration) {
    var match = /^(.+)\bfrom\s*(("|')(.*?)("|'))$/.exec(importDeclaration);
    if(!match) {
        return { moduleSpecifier: importDeclaration.replace(/\"|\'/g, "").trim() };
    }

    return {
        importSpecifierSet: match[1].trim(),
        moduleSpecifier: match[4].trim()
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
        defaultImport: defaultImport,
        decomposedImports: decomposedImports
    };
}

function getVariableName(moduleSpecifier) {
    var withoutPath = /([^\/\\]+)$/.exec(moduleSpecifier)[1];
    var withoutExtension = withoutPath.replace(/\.[a-z0-9]+$/i, '');
    return withoutExtension.replace(/[^a-z0-9]+([a-z])/gi, (_, p1) => p1.toUpperCase())+'_module';
}

function getNames(importSpecifier) {
       var names = importSpecifier.split(/\bas\b/);

       if (names.length == 1) {
            names[1] = names[0];
       }

       return {
            exported: names[0].trim(),
            local: names[1].trim()
       };
}

module.exports = function importToAssignments(tagString) {
    var importDeclaration = tagString.replace(/^import/, '').trim();
    var specifiers = getSpecifiers(importDeclaration);
    var importSpecifierSet = specifiers.importSpecifierSet;
    var moduleSpecifier = specifiers.moduleSpecifier;

    if(!importSpecifierSet) {
        return [ { module: true, value: moduleSpecifier } ];
    }

    var importGroups = getImportSpecifierGroups(importSpecifierSet);
    var rootVariable = getNames(importGroups.defaultImport).local || getVariableName(moduleSpecifier);
    var specifierList = importGroups.decomposedImports.map(getNames).map(names => {
        return {
            name: names.local,
            value: {
                object: rootVariable,
                property: names.exported
            }
        };
    });

    return [{ name: rootVariable, value: moduleSpecifier, module: true }].concat(specifierList) ;
};