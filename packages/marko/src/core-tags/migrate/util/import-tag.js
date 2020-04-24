const camelCase = require("camelcase");
const nameReg = /\/([^/]+?)(?:\/index)?(?:\.[^/]+)?$/;

module.exports = function importTag(importIdentifier, context) {
  const builder = context.builder;
  const migrateImports = (context._migrateImports = context._migrateImports || {
    identifiers: {},
    paths: {}
  });
  const isImportedAsTag = importIdentifier[0] === "<";

  // Create a camelcased tagName identifier based off of the matched file name.
  // Replace any invalid JS chars (We don't need to worry about reserved words because of camelcase).
  const createTagName = fileName =>
    camelCase(fileName, {
      pascalCase: true
    }).replace(/^[^$A-Z_]|[^0-9A-Z_$]/gi, "_");

  const getIdentifierName = importIdentifier => {
    let fileName;
    if (isImportedAsTag) fileName = importIdentifier.slice(1, -1);
    else {
      const importPath = context.getRelativePath(importIdentifier);
      const match = nameReg.exec(importPath);
      fileName = (match && match[1]) || "template";
    }
    return createTagName(fileName);
  };

  const requestedTagName = getIdentifierName(importIdentifier);

  if (migrateImports.paths[importIdentifier]) {
    return migrateImports.paths[importIdentifier];
  }

  const symbols = [];
  const walker = context.createWalker({
    enter(node) {
      // Try to fetch all symbols and then put them in an array
      // We will check if any symbols or imports have matching items
      // in order to prevent variable collisions
      if (node.type === "HtmlElement" && node.tagName === "import") {
        symbols.push(node.tagString);
      } else if (node.type === "Scriptlet") {
        symbols.push(node.code);
      }
    }
  });
  walker.walk(context.root);

  let identifier = requestedTagName;
  let i = 1;

  while (
    migrateImports.identifiers[identifier] ||
    symbols.some(symbol => symbol.includes(identifier))
  ) {
    identifier = `${requestedTagName}_${i}`;
    i++;
  }

  const importTag = builder.htmlElement("import");
  importTag.tagString = `import ${identifier} from ${JSON.stringify(
    importIdentifier
  )}`;

  // Ensure imports are in order of use.
  if (context._lastMigrateImport) {
    context._lastMigrateImport.insertSiblingAfter(importTag);
  } else {
    context.root.prependChild(importTag);
  }

  migrateImports.identifiers[identifier] = true;
  migrateImports.paths[importIdentifier] = identifier;
  context._lastMigrateImport = importTag;
  return identifier;
};
