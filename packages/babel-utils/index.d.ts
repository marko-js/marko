import type { types as t } from "@marko/compiler";

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
export type PluginDefinition = {
  path?: string;
  hook: Plugin;
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
  taglibId: string;
  template: string;
  renderer: string;
  deprecated: boolean;
  isNestedTag: true;
  isRepeated: boolean;
  openTagOnly: boolean;
  targetProperty: string;
  translator?: PluginDefinition;
  parser?: PluginDefinition;
  transformers?: PluginDefinition[];
  migrators?: PluginDefinition[];
  parseOptions?: {
    rootOnly?: boolean,
    rawOpenTag?: boolean,
    openTagOnly?: boolean,
    ignoreAttributes?: boolean,
    relaxRequireCommas?: boolean,
    state?: "html" | "static-text" | "parsed-text" | "cdata"
  }
}

export interface TaglibLookup {
  getTagsSorted(): TagDefinition[];
  getTag(tagName: string): TagDefinition;
  getAttribute(tagName: string, attrName: string): AttributeDefinition;
  forEachAttribute(
    tagName: string,
    callback: (attr: AttributeDefinition, tag: TagDefinition) => void
  ): void;
}

export type FunctionPlugin = (path: t.NodePath<any>, types: typeof t) => void;
type EnterExitPlugin = {
  enter?(path: t.NodePath<any>, types: typeof t): void;
  exit?(path: t.NodePath<any>, types: typeof t): void;
};

export type ModulePlugin = {
  default: EnterExitPlugin | FunctionPlugin;
};

export type Plugin = ModulePlugin | EnterExitPlugin | FunctionPlugin;

export function assertAllowedAttributes(path: t.NodePath<t.MarkoTag>, allowed: string[]): void;
export function assertNoArgs(path: t.NodePath<t.MarkoTag>): void;
export function assertNoVar(path: t.NodePath<t.MarkoTag>): void;
export function assertNoAttributes(path: t.NodePath<t.MarkoTag>): void;
export function assertNoParams(path: t.NodePath<t.MarkoTag>): void;
export function assertNoAttributeTags(path: t.NodePath<t.MarkoTag>): void;

export function isNativeTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isMacroTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isDynamicTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isAttributeTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isTransparentTag(path: t.NodePath<t.MarkoTag>): boolean;
export function isLoopTag(path: t.NodePath<t.MarkoTag>): boolean;

export function getMacroIdentifier(
  path: t.NodePath<t.MarkoTag>
): t.Identifier | undefined;
export function getTagDef(path: t.NodePath<t.MarkoTag>): TagDefinition | undefined;
export function getFullyResolvedTagName(path: t.NodePath<t.MarkoTag>): string;

export function findParentTag(
  path: t.NodePath<t.MarkoTag>
): t.NodePath<t.MarkoTag> | undefined;
export function findAttributeTags(
  path: t.NodePath<t.MarkoTag>
): Array<t.NodePath<t.MarkoTag>>;

export function getArgOrSequence(path: t.NodePath<t.MarkoTag>): t.Expression;

export function loadFileForTag(path: t.NodePath<t.MarkoTag>): t.BabelFile | undefined;
export function loadFileForImport(file: t.BabelFile, template: string): t.BabelFile | undefined;

export function normalizeTemplateString(
  quasis: Array<string | t.TemplateElement>,
  expressions: t.Expression[]
): t.TemplateLiteral;

type Loc = { line: number; column: number };
type LocRange = { start: Loc; end: Loc };

export function getLoc(file: t.BabelFile, pos: number): Loc;
export function getLocRange(file: t.BabelFile, pos: number): LocRange;
export function withLoc<T extends t.Node>(
  file: t.BabelFile,
  node: T,
  start: number,
  end: number
): T;

export function parseScript(
  file: t.BabelFile,
  str: string,
  start?: number
): t.Program;
export function parseExpression(
  file: t.BabelFile,
  str: string,
  start?: number
): t.Expression;

export function resolveRelativePath(file: t.BabelFile, request: string): string;
export function importDefault(
  file: t.BabelFile,
  request: string,
  nameHint?: string
): t.Identifier;
export function importNamed(
  file: t.BabelFile,
  request: string,
  name: string,
  nameHint?: string
): t.Identifier;

export function getTaglibLookup(file: t.BabelFile): TaglibLookup;
export function getTagDefForTagName(file: t.BabelFile, tagName: string): TagDefinition | undefined;

export function getTemplateId(optimize: boolean, request: string): string;
export function resolveTagImport(path: t.NodePath<any>, request: string): string | undefined;