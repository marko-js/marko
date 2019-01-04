const camelCase = require("camelcase");
const nameReg = /\/([^/]+?)(?:\/index)?(?:\..*)?$/;

module.exports = function importTag(importPath, context) {
    const builder = context.builder;
    const migrateImports = (context._migrateImports = context._migrateImports || {
        identifiers: {},
        paths: {}
    });

    if (migrateImports.paths[importPath]) {
        return migrateImports.paths[importPath];
    }

    const match = nameReg.exec(importPath);
    const requestedTagName = camelCase((match && match[1]) || "Template", {
        pascalCase: true
    });

    // Replace any invalid JS chars.
    // We don't need to worry about reserved words because of camelcase.
    let identifier = requestedTagName.replace(/^[^$A-Z_]|[^0-9A-Z_$]/gi, "_");
    let i = 1;

    while (
        migrateImports.identifiers[identifier] ||
        context.src.includes(identifier)
    ) {
        identifier = `${requestedTagName}_${i}`;
        i++;
    }

    const importTag = builder.htmlElement("import");
    importTag.tagString = `import ${identifier} from ${JSON.stringify(
        importPath
    )}`;

    // Ensure imports are in order of use.
    if (context._lastMigrateImport) {
        context._lastMigrateImport.insertSiblingAfter(importTag);
    } else {
        context.root.prependChild(importTag);
    }

    migrateImports.identifiers[identifier] = true;
    migrateImports.paths[importPath] = identifier;
    context._lastMigrateImport = importTag;
    return identifier;
};
