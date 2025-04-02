export { getFile, getProgram } from "../babel-plugin";
export {
  assertAllowedAttributes,
  assertAttributesOrArgs,
  assertAttributesOrSingleArg,
  assertNoArgs,
  assertNoAttributes,
  assertNoAttributeTags,
  assertNoParams,
  assertNoVar,
} from "./assert";
export { computeNode } from "./compute";
export {
  diagnosticDeprecate,
  diagnosticError,
  diagnosticSuggest,
  DiagnosticType,
  diagnosticWarn,
} from "./diagnostics";
export {
  importDefault,
  importNamed,
  importStar,
  resolveRelativePath,
} from "./imports";
export { getEnd, getLoc, getLocRange, getStart, withLoc } from "./loc";
export {
  parseArgs,
  parseExpression,
  parseParams,
  parseStatements,
  parseTemplateLiteral,
  parseTypeArgs,
  parseTypeParams,
  parseVar,
} from "./parse";
export { getTagDefForTagName, getTaglibLookup } from "./taglib";
export {
  findAttributeTags,
  findParentTag,
  getArgOrSequence,
  getFullyResolvedTagName,
  getMacroIdentifier,
  getMacroIdentifierForName,
  getTagDef,
  getTagTemplate,
  getTemplateId,
  hasMacro,
  isAttributeTag,
  isDynamicTag,
  isLoopTag,
  isMacroTag,
  isNativeTag,
  isTransparentTag,
  loadFileForImport,
  loadFileForTag,
  registerMacro,
  resolveTagImport,
} from "./tags";
export { normalizeTemplateString } from "./template-string";

export function defineTag(tag) {
  return tag;
} // just used for adding types for compiler plugins.
