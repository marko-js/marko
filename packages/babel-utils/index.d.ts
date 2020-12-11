import type {
  Node,
  NodePath,
  MarkoTag,
  Identifier,
  Expression,
  TemplateElement,
  TemplateLiteral,
  Program,
  BabelFile,
  types as t
} from "@marko/babel-types";

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
  codeGeneratorModulePath?: string;
  nodeFactoryPath?: string;
  transformers?: string[];
  migrators?: string[];
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

export type FunctionPlugin = (path: NodePath<any>, types: typeof t) => void;
type EnterExitPlugin = {
  enter?(path: NodePath<any>, types: typeof t): void;
  exit?(path: NodePath<any>, types: typeof t): void;
};

export type ModulePlugin = {
  default: EnterExitPlugin | FunctionPlugin;
};

export type Plugin = ModulePlugin | EnterExitPlugin | FunctionPlugin;

export function assertAllowedAttributes(path: NodePath<MarkoTag>, allowed: string[]): void;
export function assertNoArgs(path: NodePath<MarkoTag>): void;
export function assertNoVar(path: NodePath<MarkoTag>): void;
export function assertNoAttributes(path: NodePath<MarkoTag>): void;
export function assertNoParams(path: NodePath<MarkoTag>): void;
export function assertNoAttributeTags(path: NodePath<MarkoTag>): void;

export function isNativeTag(path: NodePath<MarkoTag>): boolean;
export function isMacroTag(path: NodePath<MarkoTag>): boolean;
export function isDynamicTag(path: NodePath<MarkoTag>): boolean;
export function isAttributeTag(path: NodePath<MarkoTag>): boolean;
export function isTransparentTag(path: NodePath<MarkoTag>): boolean;
export function isLoopTag(path: NodePath<MarkoTag>): boolean;

export function getMacroIdentifier(
  path: NodePath<MarkoTag>
): Identifier | undefined;
export function getTagDef(path: NodePath<MarkoTag>): TagDefinition | undefined;
export function getFullyResolvedTagName(path: NodePath<MarkoTag>): string;

export function findParentTag(
  path: NodePath<MarkoTag>
): NodePath<MarkoTag> | undefined;
export function findAttributeTags(
  path: NodePath<MarkoTag>
): Array<NodePath<MarkoTag>>;

export function getArgOrSequence(path: NodePath<MarkoTag>): Expression;

export function loadFileForTag(path: NodePath<MarkoTag>): File | undefined;

export function normalizeTemplateString(
  quasis: Array<string | TemplateElement>,
  expressions: Expression[]
): TemplateLiteral;

type Loc = { line: number; column: number };
type LocRange = { start: Loc; end: Loc };

export function getLoc(file: BabelFile, pos: number): Loc;
export function getLocRange(file: BabelFile, pos: number): LocRange;
export function withLoc<T extends Node>(
  file: BabelFile,
  node: T,
  start: number,
  end: number
): T;

export function parseScript(
  file: BabelFile,
  str: string,
  start?: number
): Program;
export function parseExpression(
  file: BabelFile,
  str: string,
  start?: number
): Expression;

export function resolveRelativePath(file: BabelFile, request: string): string;
export function importDefault(
  file: BabelFile,
  request: string,
  nameHint?: string
): Identifier;
export function importNamed(
  file: BabelFile,
  request: string,
  nameHint?: string
): Identifier;

export function getTaglibLookup(file: BabelFile): TaglibLookup;
export function getTagDefForTagName(file: BabelFile, tagName: string): TagDefinition | undefined;

export function getTemplateId(optimize: boolean, request: string): string;
export function resolveTagImport(path: NodePath<any>, request: string): string | undefined;