/**********************************************************************************************
Some of the source code in this file is sourced from https://github.com/babel/babel, and is licensed as below:

MIT License

Copyright (c) 2014-present Sebastian McKenzie and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

***********************************************************************************************/

import * as t from "@babel/types";

let code = `// NOTE: This file is autogenerated. Do not modify.
// See packages/babel-types/scripts/generators/typescript-legacy.js for script used.

interface BaseComment {
  value: string;
  start: number;
  end: number;
  loc: SourceLocation;
  type: "CommentBlock" | "CommentLine";
}

export interface CommentBlock extends BaseComment {
  type: "CommentBlock";
}

export interface CommentLine extends BaseComment {
  type: "CommentLine";
}

export type Comment = CommentBlock | CommentLine;

export interface SourceLocation {
  start: {
    line: number;
    column: number;
  };

  end: {
    line: number;
    column: number;
  };
}

export interface NodeExtra {
  [key: string]: unknown;
}

interface BaseNode {
  leadingComments: ReadonlyArray<Comment> | null;
  innerComments: ReadonlyArray<Comment> | null;
  trailingComments: ReadonlyArray<Comment> | null;
  start: number | null;
  end: number | null;
  loc: SourceLocation | null;
  type: Node["type"];
  extra?: NodeExtra;
}

export type Node = ${t.TYPES.sort().join(" | ")};\n\n`;

//

const lines = [];

for (const type in t.NODE_FIELDS) {
  const fields = t.NODE_FIELDS[type];
  const fieldNames = sortFieldNames(Object.keys(t.NODE_FIELDS[type]), type);
  const builderNames = t.BUILDER_KEYS[type];

  const struct = ['type: "' + type + '";'];
  const args = [];

  fieldNames.forEach((fieldName) => {
    const field = fields[fieldName];
    // Future / annoying TODO:
    // MemberExpression.property, ObjectProperty.key and ObjectMethod.key need special cases; either:
    // - convert the declaration to chain() like ClassProperty.key and ClassMethod.key,
    // - declare an alias type for valid keys, detect the case and reuse it here,
    // - declare a disjoint union with, for example, ObjectPropertyBase,
    //   ObjectPropertyLiteralKey and ObjectPropertyComputedKey, and declare ObjectProperty
    //   as "ObjectPropertyBase & (ObjectPropertyLiteralKey | ObjectPropertyComputedKey)"
    let typeAnnotation = stringifyValidator(field.validate, "");

    if (isNullable(field) && !hasDefault(field)) {
      typeAnnotation += " | null";
    }

    if (builderNames.includes(fieldName)) {
      if (areAllRemainingFieldsNullable(fieldName, builderNames, fields)) {
        args.push(
          `${t.toBindingIdentifierName(fieldName)}${
            isNullable(field) ? "?:" : ":"
          } ${typeAnnotation}`,
        );
      } else {
        args.push(
          `${t.toBindingIdentifierName(fieldName)}: ${typeAnnotation}${
            isNullable(field) ? " | undefined" : ""
          }`,
        );
      }
    }

    const alphaNumeric = /^\w+$/;

    if (t.isValidIdentifier(fieldName) || alphaNumeric.test(fieldName)) {
      struct.push(`${fieldName}: ${typeAnnotation};`);
    } else {
      struct.push(`"${fieldName}": ${typeAnnotation};`);
    }
  });

  code += `export interface ${type} extends BaseNode {
  ${struct.join("\n  ").trim()}
}\n\n`;

  // super and import are reserved words in JavaScript
  if (type !== "Super" && type !== "Import") {
    lines.push(
      `export function ${toFunctionName(type)}(${args.join(", ")}): ${type};`,
    );
  } else {
    const functionName = toFunctionName(type);
    lines.push(
      `declare function _${functionName}(${args.join(", ")}): ${type};`,
      `export { _${functionName} as ${functionName}}`,
    );
  }
}

for (const typeName of t.TYPES) {
  const isDeprecated = !!t.DEPRECATED_KEYS[typeName];
  const realName = isDeprecated ? t.DEPRECATED_KEYS[typeName] : typeName;

  const result =
    t.NODE_FIELDS[realName] || t.FLIPPED_ALIAS_KEYS[realName]
      ? `node is ${realName}`
      : "boolean";

  if (isDeprecated) {
    lines.push(`/** @deprecated Use \`is${realName}\` */`);
  }
  lines.push(
    `export function is${typeName}(node: object | null | undefined, opts?: object | null): ${result};`,
  );

  if (isDeprecated) {
    lines.push(`/** @deprecated Use \`assert${realName}\` */`);
  }
  lines.push(
    `export function assert${typeName}(node: object | null | undefined, opts?: object | null): void;`,
  );
}

lines.push(
  // assert/
  `export function assertNode(obj: any): void`,

  // builders/

  `export function createTypeAnnotationBasedOnTypeof(type: 'string' | 'number' | 'undefined' | 'boolean' | 'function' | 'object' | 'symbol'): StringTypeAnnotation | VoidTypeAnnotation | NumberTypeAnnotation | BooleanTypeAnnotation | GenericTypeAnnotation`,
  `export function createUnionTypeAnnotation<T extends FlowType>(types: [T]): T`,
  `export function createFlowUnionType<T extends FlowType>(types: [T]): T`,
  // this probably misbehaves if there are 0 elements, and it's not a UnionTypeAnnotation if there's only 1
  // it is possible to require "2 or more" for this overload ([T, T, ...T[]]) but it requires typescript 3.0
  `export function createUnionTypeAnnotation(types: ReadonlyArray<FlowType>): UnionTypeAnnotation`,
  `export function createFlowUnionType(types: ReadonlyArray<FlowType>): UnionTypeAnnotation`,
  // this smells like "internal API"

  `export function buildChildren(node: { children: ReadonlyArray<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment | JSXEmptyExpression> }): JSXElement['children']`,

  // clone/
  `export function clone<T extends Node>(n: T): T;`,
  `export function cloneDeep<T extends Node>(n: T): T;`,
  `export function cloneDeepWithoutLoc<T extends Node>(n: T): T;`,
  `export function cloneNode<T extends Node>(n: T, deep?: boolean, withoutLoc?: boolean): T;`,
  `export function cloneWithoutLoc<T extends Node>(n: T): T;`,

  // comments/
  `export type CommentTypeShorthand = 'leading' | 'inner' | 'trailing'`,

  `export function addComment<T extends Node>(node: T, type: CommentTypeShorthand, content: string, line?: boolean): T`,

  `export function addComments<T extends Node>(node: T, type: CommentTypeShorthand, comments: ReadonlyArray<Comment>): T`,
  `export function inheritInnerComments(node: Node, parent: Node): void`,
  `export function inheritLeadingComments(node: Node, parent: Node): void`,
  `export function inheritsComments<T extends Node>(node: T, parent: Node): void`,
  `export function inheritTrailingComments(node: Node, parent: Node): void`,
  `export function removeComments<T extends Node>(node: T): T`,

  // converters/

  `export function ensureBlock(node: Extract<Node, { body: BlockStatement | Statement | Expression }>): BlockStatement`,
  // too complex?

  `export function ensureBlock<K extends keyof Extract<Node, { body: BlockStatement | Statement | Expression }> = 'body'>(node: Extract<Node, Record<K, BlockStatement | Statement | Expression>>, key: K): BlockStatement`,
  // gatherSequenceExpressions is not exported
  `export function toBindingIdentifierName(name: { toString(): string } | null | undefined): string`,
  `export function toBlock(node: Statement | Expression, parent?: Function | null): BlockStatement`,
  // it is possible for `node` to be an arbitrary object if `key` is always provided,
  // but that doesn't look like intended API

  `export function toComputedKey<T extends Extract<Node, { computed: boolean | null }>>(node: T, key?: Expression | Identifier): Expression`,
  `export function toExpression(node: Function): FunctionExpression`,
  `export function toExpression(node: Class): ClassExpression`,
  `export function toExpression(node: ExpressionStatement | Expression | Class | Function): Expression`,
  `export function toIdentifier(name: { toString(): string } | null | undefined): string`,
  `export function toKeyAlias(node: Method | Property, key?: Node): string`,
  // NOTE: this actually uses Scope from @babel/traverse, but we can't add a dependency on its types,
  // as they live in @types. Declare the structural subset that is required.

  `export function toSequenceExpression(nodes: ReadonlyArray<Node>, scope: { push(value: { id: LVal; kind: 'var'; init?: Expression}): void; buildUndefinedNode(): Node }): SequenceExpression | undefined`,
  `export function toStatement(node: AssignmentExpression, ignore?: boolean): ExpressionStatement`,
  `export function toStatement(node: Statement | AssignmentExpression, ignore?: boolean): Statement`,
  `export function toStatement(node: Class, ignore: true): ClassDeclaration | undefined`,
  `export function toStatement(node: Class, ignore?: boolean): ClassDeclaration`,
  `export function toStatement(node: Function, ignore: true): FunctionDeclaration | undefined`,
  `export function toStatement(node: Function, ignore?: boolean): FunctionDeclaration`,

  `export function toStatement(node: Statement | Class | Function | AssignmentExpression, ignore: true): Statement | undefined`,

  `export function toStatement(node: Statement | Class | Function | AssignmentExpression, ignore?: boolean): Statement`,

  `export function valueToNode(value: undefined): Identifier`, // (should this not be a UnaryExpression to avoid shadowing?)
  `export function valueToNode(value: boolean): BooleanLiteral`,
  `export function valueToNode(value: null): NullLiteral`,
  `export function valueToNode(value: string): StringLiteral`,
  // Infinities and NaN need to use a BinaryExpression; negative values must be wrapped in UnaryExpression
  `export function valueToNode(value: number): NumericLiteral | BinaryExpression | UnaryExpression`,
  `export function valueToNode(value: RegExp): RegExpLiteral`,

  `export function valueToNode(value: ReadonlyArray<undefined | boolean | null | string | number | RegExp | object>): ArrayExpression`,
  // this throws with objects that are not PlainObject according to lodash,
  // or if there are non-valueToNode-able values
  `export function valueToNode(value: object): ObjectExpression`,

  `export function valueToNode(value: undefined | boolean | null | string | number | RegExp | object): Expression`,

  // modifications/

  `export function removeTypeDuplicates(types: ReadonlyArray<FlowType | false | null | undefined>): FlowType[]`,

  `export function appendToMemberExpression<T extends Pick<MemberExpression, 'object' | 'property'>>(member: T, append: MemberExpression['property'], computed?: boolean): T`,

  `export function inherits<T extends Node | null | undefined>(child: T, parent: Node | null | undefined): T`,

  `export function prependToMemberExpression<T extends Pick<MemberExpression, 'object' | 'property'>>(member: T, prepend: MemberExpression['object']): T`,
  `export function removeProperties(
  n: Node,
  opts?: { preserveComments: boolean } | null
): void;`,
  `export function removePropertiesDeep<T extends Node>(
  n: T,
  opts?: { preserveComments: boolean } | null
): T;`,

  // retrievers/

  `export function getBindingIdentifiers(node: Node, duplicates: true, outerOnly?: boolean): Record<string, Array<Identifier>>`,

  `export function getBindingIdentifiers(node: Node, duplicates?: false, outerOnly?: boolean): Record<string, Identifier>`,

  `export function getBindingIdentifiers(node: Node, duplicates: boolean, outerOnly?: boolean): Record<string, Identifier | Array<Identifier>>`,

  `export function getOuterBindingIdentifiers(node: Node, duplicates: true): Record<string, Array<Identifier>>`,
  `export function getOuterBindingIdentifiers(node: Node, duplicates?: false): Record<string, Identifier>`,

  `export function getOuterBindingIdentifiers(node: Node, duplicates: boolean): Record<string, Identifier | Array<Identifier>>`,

  // traverse/
  `export type TraversalAncestors = ReadonlyArray<{
    node: Node,
    key: string,
    index?: number,
  }>;
  export type TraversalHandler<T> = (
    this: undefined, node: Node, parent: TraversalAncestors, type: T
  ) => void;
  export type TraversalHandlers<T> = {
    enter?: TraversalHandler<T>,
    exit?: TraversalHandler<T>,
  };`.replace(/(^|\n) {2}/g, "$1"),

  `export function traverse<T>(n: Node, h: TraversalHandler<T> | TraversalHandlers<T>, state?: T): void;`,
  `export function traverseFast<T>(n: Node, h: TraversalHandler<T>, state?: T): void;`,

  // utils/
  // cleanJSXElementLiteralChild is not exported
  // inherit is not exported
  `export function shallowEqual<T extends object>(actual: object, expected: T): actual is T`,

  // validators/

  `export function buildMatchMemberExpression(match: string, allowPartial?: boolean): (node: Node | null | undefined) => node is MemberExpression`,

  `export function is<T extends Node['type']>(type: T, n: Node | null | undefined, required?: undefined): n is Extract<Node, { type: T }>`,

  `export function is<T extends Node['type'], P extends Extract<Node, { type: T }>>(type: T, n: Node | null | undefined, required: Partial<P>): n is P`,

  `export function is<P extends Node>(type: string, n: Node | null | undefined, required: Partial<P>): n is P`,
  `export function is(type: string, n: Node | null | undefined, required?: Partial<Node>): n is Node`,
  `export function isBinding(node: Node, parent: Node, grandparent?: Node): boolean`,

  `export function isBlockScoped(node: Node): node is FunctionDeclaration | ClassDeclaration | VariableDeclaration`,
  `export function isImmutable(node: Node): node is Immutable`,
  `export function isLet(node: Node): node is VariableDeclaration`,
  `export function isNode(node: object | null | undefined): node is Node`,
  `export function isNodesEquivalent<T extends Partial<Node>>(a: T, b: any): b is T`,
  `export function isNodesEquivalent(a: any, b: any): boolean`,
  `export function isPlaceholderType(placeholderType: Node['type'], targetType: Node['type']): boolean`,
  `export function isReferenced(node: Node, parent: Node, grandparent?: Node): boolean`,
  `export function isScope(node: Node, parent: Node): node is Scopable`,
  `export function isSpecifierDefault(specifier: ModuleSpecifier): boolean`,
  `export function isType<T extends Node['type']>(nodetype: string, targetType: T): nodetype is T`,
  `export function isType(nodetype: string | null | undefined, targetType: string): boolean`,
  `export function isValidES3Identifier(name: string): boolean`,
  `export function isValidIdentifier(name: string): boolean`,
  `export function isVar(node: Node): node is VariableDeclaration`,
  // the MemberExpression implication is incidental, but it follows from the implementation

  `export function matchesPattern(node: Node | null | undefined, match: string | ReadonlyArray<string>, allowPartial?: boolean): node is MemberExpression`,

  `export function validate<T extends Node, K extends keyof T>(n: Node | null | undefined, key: K, value: T[K]): void;`,
  `export function validate(n: Node, key: string, value: any): void;`,
);

for (const type in t.DEPRECATED_KEYS) {
  code += `/**
 * @deprecated Use \`${t.DEPRECATED_KEYS[type]}\`
 */
export type ${type} = ${t.DEPRECATED_KEYS[type]};\n
`;
}

for (const type in t.FLIPPED_ALIAS_KEYS) {
  const types = t.FLIPPED_ALIAS_KEYS[type];
  code += `export type ${type} = ${types
    .map((type) => `${type}`)
    .join(" | ")};\n`;
}
code += "\n";

code += "export interface Aliases {\n";
for (const type in t.FLIPPED_ALIAS_KEYS) {
  code += `  ${type}: ${type};\n`;
}
code += "}\n\n";

code += lines.join("\n") + "\n";

//

export default code;

//

function areAllRemainingFieldsNullable(fieldName, fieldNames, fields) {
  const index = fieldNames.indexOf(fieldName);
  return fieldNames.slice(index).every((_) => isNullable(fields[_]));
}

function hasDefault(field) {
  return field.default != null;
}

function isNullable(field) {
  return field.optional || hasDefault(field);
}

function sortFieldNames(fields, type) {
  return fields.sort((fieldA, fieldB) => {
    const indexA = t.BUILDER_KEYS[type].indexOf(fieldA);
    const indexB = t.BUILDER_KEYS[type].indexOf(fieldB);
    if (indexA === indexB) return fieldA < fieldB ? -1 : 1;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
}

function stringifyValidator(validator, nodePrefix) {
  if (validator === undefined) {
    return "any";
  }

  if (validator.each) {
    return `Array<${stringifyValidator(validator.each, nodePrefix)}>`;
  }

  if (validator.chainOf) {
    const ret = stringifyValidator(validator.chainOf[1], nodePrefix);
    return Array.isArray(ret) && ret.length === 1 && ret[0] === "any"
      ? stringifyValidator(validator.chainOf[0], nodePrefix)
      : ret;
  }

  if (validator.oneOf) {
    return validator.oneOf.map(JSON.stringify).join(" | ");
  }

  if (validator.oneOfNodeTypes) {
    return validator.oneOfNodeTypes.map((_) => nodePrefix + _).join(" | ");
  }

  if (validator.oneOfNodeOrValueTypes) {
    return validator.oneOfNodeOrValueTypes
      .map((_) => {
        return isValueType(_) ? _ : nodePrefix + _;
      })
      .join(" | ");
  }

  if (validator.type) {
    return validator.type;
  }

  if (validator.shapeOf) {
    return (
      "{ " +
      Object.keys(validator.shapeOf)
        .map((shapeKey) => {
          const propertyDefinition = validator.shapeOf[shapeKey];
          if (propertyDefinition.validate) {
            const isOptional =
              propertyDefinition.optional || propertyDefinition.default != null;
            return (
              shapeKey +
              (isOptional ? "?: " : ": ") +
              stringifyValidator(propertyDefinition.validate)
            );
          }
          return null;
        })
        .filter(Boolean)
        .join(", ") +
      " }"
    );
  }

  return ["any"];
}

function isValueType(type) {
  return type.charAt(0).toLowerCase() === type.charAt(0);
}

function toFunctionName(typeName) {
  const _ = typeName.replace(/^TS/, "ts").replace(/^JSX/, "jsx");
  return _.slice(0, 1).toLowerCase() + _.slice(1);
}
