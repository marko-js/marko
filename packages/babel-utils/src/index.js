export {
  isNativeTag,
  isMacroTag,
  isDynamicTag,
  isAttributeTag,
  isTransparentTag,
  isLoopTag,
  registerMacro,
  hasMacro,
  getMacroIdentifierForName,
  getMacroIdentifier,
  getTagDef,
  getFullyResolvedTagName,
  findParentTag,
  findAttributeTags,
  getArgOrSequence,
  loadFileForTag,
  loadFileForImport,
  getTemplateId,
  resolveTagImport,
} from "./tags";
export {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  assertNoVar,
  assertNoAttributeTags,
} from "./assert";
export { normalizeTemplateString } from "./template-string";

export { getLoc, getLocRange, withLoc } from "./loc";

export {
  parseStatements,
  parseExpression,
  parseParams,
  parseArgs,
  parseVar,
  parseTemplateLiteral,
} from "./parse";

export { resolveRelativePath, importDefault, importNamed } from "./imports";

export { getTaglibLookup, getTagDefForTagName } from "./taglib";

export {
  DiagnosticType,
  diagnosticError,
  diagnosticDeprecate,
  diagnosticWarn,
  diagnosticSuggest,
} from "./diagnostics";

export function defineTag(tag) {
  return tag;
} // just used for adding types for compiler plugins.
