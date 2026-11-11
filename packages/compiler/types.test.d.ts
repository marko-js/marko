// Type assertions the package build checks: each entry stops compiling when a
// declaration drifts from what the compiler actually returns.
import type { SourceMap } from "magic-string";

import type {
  AttributeDefinition,
  parseTypeArgs,
  parseTypeParams,
  TagDefinition,
} from "./babel-utils";
import type { CompileResult, taglib, types } from "./index";
import type * as taglibImplementation from "./src/taglib";

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type Expect<T extends true> = T;

export type CompileResultTests = [
  Expect<Equal<CompileResult["code"], string>>,
  Expect<Equal<CompileResult["ast"], types.File | null>>,
  Expect<Equal<CompileResult["map"], SourceMap | null>>,
  Expect<Equal<CompileResult<{ code: false }>["code"], null>>,
  Expect<Equal<CompileResult<{ code: false; sourceMaps: true }>["map"], null>>,
  Expect<Equal<CompileResult<{ ast: true }>["ast"], types.File>>,
  Expect<Equal<CompileResult<{ sourceMaps: true }>["map"], SourceMap>>,
  Expect<Equal<CompileResult<{ sourceMaps: "both" }>["map"], SourceMap>>,
  Expect<Equal<CompileResult<{ sourceMaps: "inline" }>["map"], null>>,
];

export type TaglibTests = [
  Expect<Equal<TagDefinition["html"], boolean | undefined>>,
  Expect<Equal<TagDefinition["isRepeated"], boolean | undefined>>,
  Expect<Equal<AttributeDefinition["dynamicAttribute"], boolean>>,
  Expect<Equal<AttributeDefinition["defaultValue"], unknown>>,
  Expect<
    Equal<
      ReturnType<typeof parseTypeArgs>,
      types.TSTypeParameterInstantiation | [types.MarkoParseError]
    >
  >,
  Expect<
    Equal<
      ReturnType<typeof parseTypeParams>,
      types.TSTypeParameterDeclaration | [types.MarkoParseError]
    >
  >,
];

export type TaglibImplementationTests = [
  Expect<[typeof taglibImplementation] extends [typeof taglib] ? true : false>,
];
