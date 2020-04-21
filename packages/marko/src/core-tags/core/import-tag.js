var isValidJavaScriptVarName = require("../../compiler/util/isValidJavaScriptVarName");
var parseImport = require("./util/parseImport");
const resolveFrom = require("resolve-from");
const path = require("path");

module.exports = function codeGenerator(el, codegen) {
  var builder = codegen.builder;
  var context = codegen.context;
  var args = parseImport(el.tagString);
  var vars = {};

  args.forEach(arg => {
    var varName = arg.name;

    if (arg.value[0] === "<") {
      const tagName = arg.value.slice(1, -1);
      const tagDef = context.taglibLookup.getTag(tagName);
      const requirePath = context.getRequirePath(
        tagDef.renderer || tagDef.template
      );
      arg.value = requirePath;
    }

    if (!isValidJavaScriptVarName(varName)) {
      codegen.addError(
        "Invalid JavaScript variable name: " + varName,
        "INVALID_VAR_NAME"
      );
      return;
    }

    if (arg.module) {
      var requireExpression = builder.require(builder.literal(arg.value));
      var moduleName = "module_" + varName;

      if (varName) {
        if (isMarkoTemplate(arg.value, context)) {
          context.importTemplate(arg.value, varName);
          return;
        }

        // saves identifier under a module alias.
        vars[varName] = codegen.addStaticVar(moduleName, requireExpression);
        // extracts out the default export.
        codegen.addStaticVar(
          varName,
          builder.logicalExpression(
            builder.memberExpression(moduleName, builder.identifier("default")),
            "||",
            moduleName
          )
        );
      } else {
        // require without saving var.
        codegen.addStaticCode(requireExpression);
      }
    } else {
      // ie: { bar } from "./bar"
      var modIdentifier = vars[arg.value.object];
      if (!modIdentifier) {
        codegen.addError("Variable not found: " + arg.value.object);
        return;
      }

      codegen.addStaticVar(
        varName,
        builder.memberExpression(
          modIdentifier,
          builder.identifier(arg.value.property)
        )
      );
    }
  });

  return [];
};

function isMarkoTemplate(importPath, context) {
  const absolutePath = resolveFrom(context.dirname, importPath);
  if (absolutePath) {
    return path.extname(absolutePath) === ".marko";
  }
}
