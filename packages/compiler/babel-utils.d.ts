import type { Config, types as t } from "@marko/compiler";

/** An attribute a class API tag declares; only the class API reads these. */
export interface AttributeDefinition {
  name: string;
  /** The `*` attribute, which gathers undeclared attributes into `targetProperty`. */
  dynamicAttribute: boolean;
  targetProperty?: string;
  preserveName?: boolean;
  removeDashes?: boolean;
  defaultValue?: unknown;
  pattern?: RegExp;
}
export interface PluginDefinition<T = any> {
  path?: string;
  hook: Plugin<T>;
}
export interface ParsePluginDefinition<T = any> {
  path?: string;
  hook: ParsePlugin<T>;
}
export interface TagDefinition {
  name: string;
  filePath: string;
  taglibId: string;
  /** Set when the taglib was discovered by resolving an installed package. */
  packageName?: string;
  /** The root directory of `packageName`, which contains all files for this tag. */
  packageRoot?: string;
  types?: string;
  template?: string;
  renderer?: string;
  html?: boolean;
  htmlType?: "html" | "svg" | "math";
  parseOptions?: {
    text?: boolean;
    statement?: boolean;
    controlFlow?: boolean;
    openTagOnly?: boolean;
    rawOpenTag?: boolean;
    preserveWhitespace?: boolean;
  };
  analyzer?: PluginDefinition<t.MarkoTag>;
  translator?: PluginDefinition<t.MarkoTag>;
  parser?: ParsePluginDefinition<t.MarkoTag>;
  transformers?: PluginDefinition<t.MarkoTag>[];
  migrators?: PluginDefinition<t.MarkoTag>[];
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  attributes?: { [x: string]: AttributeDefinition };
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  patternAttributes?: AttributeDefinition[];
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  nestedTags?: {
    [x: string]: TagDefinition & {
      isNestedTag: true;
      targetProperty: string;
    };
  };
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  isNestedTag?: boolean;
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  isRepeated?: boolean;
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  targetProperty?: string;
}

export interface TaglibLookup {
  getTagsSorted(): TagDefinition[];
  getTag(tagName: string): undefined | TagDefinition;
  migrators: PluginDefinition<t.Program>[];
  transformers: PluginDefinition<t.Program>[];
  translators: PluginDefinition<t.Program>[];
  /** The `marko.json` files its directories load, with their imports, which its compiles watch. */
  watchFiles: string[];
  exclusiveTagDiscoveryDirs: undefined | false | string;
  discoveryDirs: undefined | string[];
  manualTagsDirs: undefined | Set<string>;
}

/** An attribute a class API tag declares; only the class API reads these. */
export interface Attribute {
  targetProperty?: string;
  preserveName?: boolean;
  removeDashes?: boolean;
  defaultValue?: unknown;
  pattern?: boolean;
}

export interface Tag {
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  attributes?: { [x: string]: Attribute };
  /** @deprecated Marko 5 (class API) only; currently inert under Marko 6. */
  nestedTags?: {
    [x: string]: Tag & {
      isRepeated?: boolean;
      targetProperty?: string;
    };
  };
  htmlType?: "html" | "svg" | "math";
  html?: boolean;
  types?: string;
  template?: string;
  renderer?: string;
  analyze?: Plugin<t.MarkoTag>;
  translate?: Plugin<t.MarkoTag>;
  parse?: ParsePlugin<t.MarkoTag>;
  transform?: Plugin<t.MarkoTag> | Plugin<t.MarkoTag>[];
  migrate?: Plugin<t.MarkoTag> | Plugin<t.MarkoTag>[];
  parseOptions?: {
    rootOnly?: boolean;
    rawOpenTag?: boolean;
    openTagOnly?: boolean;
    controlFlow?: boolean;
    ignoreAttributes?: boolean;
    relaxRequireCommas?: boolean;
    statement?: boolean;
    preserveWhitespace?: boolean;
    text?: boolean;
    html?: boolean;
  };
}

export function defineTag<T extends Tag>(tag: T): T;

export type FunctionPlugin<T = any> = (
  path: t.NodePath<T>,
  types: typeof t,
) => void;
export interface EnterExitPlugin<T = any> {
  enter?(path: t.NodePath<T>, types: typeof t): void;
  exit?(path: t.NodePath<T>, types: typeof t): void;
}

export interface ModulePlugin<T = any> {
  default: EnterExitPlugin<T> | FunctionPlugin<T>;
}

export interface ModuleFunctionPlugin<T = any> {
  default: FunctionPlugin<T>;
}

export type ParsePlugin<T = any> = ModuleFunctionPlugin<T> | FunctionPlugin<T>;

export type Plugin<T = any> =
  | ModulePlugin<T>
  | EnterExitPlugin<T>
  | FunctionPlugin<T>;

export function assertAllowedAttributes(
  path: t.NodePath<t.MarkoTag>,
  allowed: string[],
): void;
export function assertNoArgs(path: t.NodePath<t.MarkoTag>, hint?: string): void;
export function assertNoVar(path: t.NodePath<t.MarkoTag>): void;
export function assertNoAttributes(path: t.NodePath<t.MarkoTag>): void;
export function assertNoParams(path: t.NodePath<t.MarkoTag>): void;
export function assertNoAttributeTags(
  path: t.NodePath<t.MarkoTag>,
  hint?: string,
): void;
export function assertAttributesOrArgs(path: t.NodePath<t.MarkoTag>): void;
export function assertAttributesOrSingleArg(path: t.NodePath<t.MarkoTag>): void;

export function isNativeTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isMacroTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isDynamicTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isAttributeTag(
  path: t.NodePath<t.MarkoTag>,
): path is t.NodePath<t.MarkoTag & { name: t.StringLiteral }>;
export function isTransparentTag(
  path: t.NodePath<t.MarkoTag>,
): path is t.NodePath<t.MarkoTag & { name: t.StringLiteral }>;
export function isLoopTag(
  path: t.NodePath<t.MarkoTag>,
): path is t.NodePath<t.MarkoTag & { name: t.StringLiteral }>;

export function registerMacro(path: t.NodePath<any>, name: string): void;
export function hasMacro(path: t.NodePath<any>, name: string): boolean;
export function getMacroIdentifierForName(
  path: t.NodePath<any>,
  name: string,
): t.Identifier;
export function getMacroIdentifier(path: t.NodePath<t.MarkoTag>): t.Identifier;
export function getTagTemplate(
  path: t.NodePath<t.MarkoTag>,
): string | undefined;
export function getTagDef(
  path: t.NodePath<t.MarkoTag>,
): TagDefinition | undefined;
export function getFullyResolvedTagName(path: t.NodePath<t.MarkoTag>): string;

export function findParentTag(
  path: t.NodePath<t.MarkoTag>,
): t.NodePath<t.MarkoTag> | undefined;
export function findAttributeTags(
  path: t.NodePath<t.MarkoTag>,
): Array<t.NodePath<t.MarkoTag>>;

export function getArgOrSequence(
  path: t.NodePath<t.MarkoTag | t.MarkoAttribute>,
): t.Expression;

export function loadFileForTag(
  path: t.NodePath<t.MarkoTag>,
): t.BabelFile | undefined;
export function loadFileForImport(
  file: t.BabelFile,
  template: string,
): t.BabelFile | undefined;

export function normalizeTemplateString(
  quasis: Array<string | t.TemplateElement>,
  ...expressions: t.Expression[]
): t.TemplateLiteral;

type Loc = { line: number; column: number; index?: number };
type LocRange = { start: Loc; end: Loc };

export function getStart(file: t.BabelFile, node: t.Node): number | null;
export function getEnd(file: t.BabelFile, node: t.Node): number | null;
export function getLoc(file: t.BabelFile, pos: number): Loc;
export function getLocRange(
  file: t.BabelFile,
  start: number,
  end: number,
): LocRange;
export function withLoc<T extends t.Node>(
  file: t.BabelFile,
  node: T,
  start: number,
  end: number,
): T;

export function parseStatements<T extends t.Statement[]>(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
  sourceOffset?: null | number,
): T;

export function parseBlock(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
): t.BlockStatement;

export function parseExpression<T extends t.Expression>(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
  sourceOffset?: null | number,
): T;

export function parseParams(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
): t.Function["params"];

export function parseArgs(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
): t.CallExpression["arguments"];

export function parseTypeArgs(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
): t.TSTypeParameterInstantiation | [t.MarkoParseError];

export function parseTypeParams(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
): t.TSTypeParameterDeclaration | [t.MarkoParseError];

export function parseVar(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
): t.VariableDeclarator["id"];

export function parseTemplateLiteral(
  file: t.BabelFile,
  str: string,
  sourceStart?: null | number,
  sourceEnd?: null | number,
): t.TemplateLiteral;

export function resolveRelativePath(
  file: t.BabelFile,
  request: string,
  tagDef?: TagDefinition,
): string;
export function importDefault(
  file: t.BabelFile,
  request: string,
  nameHint?: string,
): t.Identifier;
export function importStar(
  file: t.BabelFile,
  request: string,
  nameHint?: string,
): t.Identifier;
export function importNamed(
  file: t.BabelFile,
  request: string,
  name: string,
  nameHint?: string,
): t.Identifier;

export function getTaglibLookup(file: t.BabelFile): TaglibLookup;
export function getTagDefForTagName(
  file: t.BabelFile,
  tagName: string,
): TagDefinition | undefined;

export function getTemplateId(
  optimize: boolean | Config,
  request: string,
  child?: string,
): string;
export function resolveTagImport(
  path: t.NodePath<any>,
  request: string,
): string | undefined;

export enum DiagnosticType {
  Error = "error",
  Warning = "warning",
  Deprecation = "deprecation",
  Suggestion = "suggestion",
}

export interface Diagnostic {
  type: DiagnosticType;
  label: string;
  loc: undefined | false | LocRange;
  fix: boolean | ConfirmFix | SelectFix;
}

export interface DiagnosticOptions {
  label: string;
  loc?: undefined | false | LocRange;
  fix?:
    | undefined
    | (() => void)
    | (ConfirmFix & {
        apply(confirmed: boolean | undefined): void;
      })
    | (SelectFix & {
        apply(selected: string | undefined): void;
      });
}

export function diagnosticError(
  path: t.NodePath<any>,
  options: DiagnosticOptions,
): void;
export function diagnosticWarn(
  path: t.NodePath<any>,
  options: DiagnosticOptions,
): void;
export function diagnosticDeprecate(
  path: t.NodePath<any>,
  options: DiagnosticOptions,
): void;
export function diagnosticSuggest(
  path: t.NodePath<any>,
  options: DiagnosticOptions,
): void;

interface ConfirmFix {
  type: "confirm";
  message: string;
  initialValue?: boolean;
}

interface SelectFix {
  type: "select";
  message: string;
  options: {
    value: string;
    label?: string;
  }[];
  initialValue?: string;
}

type Computed =
  | undefined
  | number
  | string
  | boolean
  | RegExp
  | bigint
  | null
  | { [x: string]: Computed }
  | Computed[];
export function computeNode(node: t.Node): undefined | { value: Computed };

/** Decodes HTML character references in raw source text. */
export function decodeHTML(htmlString: string): string;

export function getFile(): t.BabelFile;
export function getProgram(): t.NodePath<t.Program>;
