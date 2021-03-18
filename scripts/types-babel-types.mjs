import "../packages/compiler/dist/babel-types/types/patch.js";
import generateAstTypes from "@babel/types/scripts/generators/ast-types.js";
process.stdout.write(generateAstTypes());
