import type {
  Node,
  NodePath,
  MarkoTag,
  Identifier,
  Expression,
  TemplateElement,
  TemplateLiteral,
  Program,
} from "@marko/babel-types";

import type { File } from "@babel/core";

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

export function getLoc(file: unknown, pos: number): Loc;
export function getLocRange(file: unknown, pos: number): LocRange;
export function withLoc<T extends Node>(
  file: unknown,
  node: T,
  start: number,
  end: number
): T;

export function parseScript(
  file: unknown,
  str: string,
  start?: number
): Program;
export function parseExpression(
  file: unknown,
  str: string,
  start?: number
): Expression;

export function resolveRelativePath(file: unknown, request: string): string;
export function importDefault(
  file: unknown,
  request: string,
  nameHint?: string
): Identifier;
export function importNamed(
  file: unknown,
  request: string,
  nameHint?: string
): Identifier;

export function getTaglibLookup(file: unknown): unknown;
export function getTagDefForTagName(file: unknown, tagName: string): unknown;
