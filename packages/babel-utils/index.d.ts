import type { Config, types as t } from "@marko/compiler";

export interface AttributeDefinition {
  allowExpressions: boolean;
  filePath: string;
  name: string;
  type?: string;
  html?: boolean;
  enum?: string[];
  pattern?: RegExp;
  required: boolean;
  defaultValue: unknown;
  description?: string;
  deprecated: boolean;
  autocomplete: Array<{
    displayText: string;
    snippet: string;
    description: string;
    descriptionMoreURL?: string;
  }>;
}
export interface PluginDefinition<T = any> {
  path?: string;
  hook: Plugin<T>;
}
export interface TagDefinition {
  dir: string;
  filePath: string;
  attributeGroups?: string[];
  patternAttributes?: AttributeDefinition[];
  attributes: { [x: string]: AttributeDefinition };
  description?: string;
  nestedTags?: {
    [x: string]: TagDefinition & {
      isNestedTag: true;
      isRepeated: boolean;
      targetProperty: string;
    };
  };
  autocomplete?: Array<{
    displayText: string;
    snippet: string;
    description: string;
    descriptionMoreURL?: string;
  }>;
  htmlType?: "html" | "svg" | "math";
  html: boolean;
  name: string;
  isNestedTag?: boolean;
  isRepeated?: boolean;
  targetProperty?: string;
  taglibId: string;
  types?: string;
  template?: string;
  renderer?: string;
  deprecated: boolean;
  openTagOnly: boolean;
  analyzer?: PluginDefinition<t.MarkoTag>;
  translator?: PluginDefinition<t.MarkoTag>;
  parser?: PluginDefinition<t.MarkoTag>;
  transformers?: PluginDefinition<t.MarkoTag>[];
  migrators?: PluginDefinition<t.MarkoTag>[];
  parseOptions?: {
    text?: boolean;
    openTagOnly?: boolean;
    statement?: boolean;
    rawOpenTag?: boolean;
    preserveWhitespace?: boolean;
  };
}

export interface TaglibLookup {
  getTagsSorted(): TagDefinition[];
  getTag(tagName: string): undefined | TagDefinition;
  getAttribute(
    tagName: string,
    attrName: string,
  ): undefined | AttributeDefinition;
  forEachAttribute(
    tagName: string,
    callback: (attr: AttributeDefinition, tag: TagDefinition) => void,
  ): void;
}

export interface Attribute {
  allowExpressions?: boolean;
  type?: string;
  html?: boolean;
  enum?: string[];
  pattern?: RegExp;
  required?: boolean;
  defaultValue?: unknown;
  description?: string;
  deprecated?: boolean;
  autocomplete?: Array<{
    displayText?: string;
    snippet?: string;
    description?: string;
    descriptionMoreURL?: string;
  }>;
}

export interface Tag {
  attributeGroups?: string[];
  patternAttributes?: Attribute[];
  attributes?: { [x: string]: Attribute };
  description?: string;
  nestedTags?: {
    [x: string]: Tag & {
      isRepeated?: boolean;
      targetProperty?: string;
    };
  };
  autocomplete?: Array<{
    displayText?: string;
    snippet?: string;
    description?: string;
    descriptionMoreURL?: string;
  }>;
  htmlType?: "html" | "svg" | "math";
  html?: boolean;
  types?: string;
  template?: string;
  renderer?: string;
  deprecated?: boolean;
  openTagOnly?: boolean;
  analyze?: Plugin<t.MarkoTag>;
  translate?: Plugin<t.MarkoTag>;
  parse?: Plugin<t.MarkoTag>;
  transform?: Plugin<t.MarkoTag>[];
  migrate?: Plugin<t.MarkoTag>[];
  parseOptions?: {
    rootOnly?: boolean;
    rawOpenTag?: boolean;
    openTagOnly?: boolean;
    ignoreAttributes?: boolean;
    relaxRequireCommas?: boolean;
    state?: "html" | "static-text" | "parsed-text" | "cdata";
  };
}

export function defineTag<T extends Tag>(tag: T): T;

export type FunctionPlugin<T = any> = (
  path: t.NodePath<T>,
  types: typeof t,
) => void;
type EnterExitPlugin<T = any> = {
  enter?(path: t.NodePath<T>, types: typeof t): void;
  exit?(path: t.NodePath<T>, types: typeof t): void;
};

export type ModulePlugin<T = any> = {
  default: EnterExitPlugin<T> | FunctionPlugin<T>;
};

export type Plugin<T = any> =
  | ModulePlugin<T>
  | EnterExitPlugin<T>
  | FunctionPlugin<T>;

export function assertAllowedAttributes(
  path: t.NodePath<t.MarkoTag>,
  allowed: string[],
): void;
export function assertNoArgs(path: t.NodePath<t.MarkoTag>): void;
export function assertNoVar(path: t.NodePath<t.MarkoTag>): void;
export function assertNoAttributes(path: t.NodePath<t.MarkoTag>): void;
export function assertNoParams(path: t.NodePath<t.MarkoTag>): void;
export function assertNoAttributeTags(path: t.NodePath<t.MarkoTag>): void;
export function assertAttributesOrArgs(path: t.NodePath<t.MarkoTag>): void;
export function assertAttributesOrSingleArg(path: t.NodePath<t.MarkoTag>): void;

export function isNativeTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isMacroTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isDynamicTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isAttributeTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isTransparentTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isLoopTag(path: t.NodePath<t.MarkoTag>): boolean;

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

export function parseStatements(file: t.BabelFile, str: string): t.Statement[];
export function parseStatements(
  file: t.BabelFile,
  str: string,
  sourceStart: number,
  sourceEnd: number,
  sourceOffset?: number,
): t.Statement[];

export function parseExpression(file: t.BabelFile, str: string): t.Expression;
export function parseExpression(
  file: t.BabelFile,
  str: string,
  sourceStart: number,
  sourceEnd: number,
  sourceOffset?: number,
): t.Expression;

export function parseParams(
  file: t.BabelFile,
  str: string,
): t.Function["params"];
export function parseParams(
  file: t.BabelFile,
  str: string,
  sourceStart: number,
  sourceEnd: number,
): t.Function["params"];

export function parseArgs(
  file: t.BabelFile,
  str: string,
): t.CallExpression["arguments"];
export function parseArgs(
  file: t.BabelFile,
  str: string,
  sourceStart: number,
  sourceEnd: number,
): t.CallExpression["arguments"];

export function parseVar(
  file: t.BabelFile,
  str: string,
): t.VariableDeclarator["id"];
export function parseVar(
  file: t.BabelFile,
  str: string,
  sourceStart: number,
  sourceEnd: number,
): t.VariableDeclarator["id"];

export function parseTemplateLiteral(
  file: t.BabelFile,
  str: string,
): t.TemplateLiteral;
export function parseTemplateLiteral(
  file: t.BabelFile,
  str: string,
  sourceStart: number,
  sourceEnd: number,
): t.TemplateLiteral;

export function resolveRelativePath(file: t.BabelFile, request: string): string;
export function importDefault(
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
