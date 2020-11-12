import type {
  Node,
  NodePath,
  MarkoTag,
  Identifier,
  Expression,
  TemplateElement,
  TemplateLiteral,
  Program,
  BabelFile
} from "@marko/babel-types";

export function assetAllowedAttributes(path: NodePath<MarkoTag>, allowed: string[]): void;
export function assertNoArgs(path: NodePath<MarkoTag>): void;
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
export function getTagDef(path: NodePath<MarkoTag>): unknown;
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

export function getTaglibLookup(file: BabelFile): unknown;
export function getTagDefForTagName(file: BabelFile, tagName: string): unknown;
