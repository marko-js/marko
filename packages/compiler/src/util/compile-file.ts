import type { ParserOptions } from "@babel/parser";
import type { Config, types as t } from "@marko/compiler";
import type { TagDefinition } from "@marko/compiler/babel-utils";

import type { HookModule } from "../babel-plugin/util/plugin-hooks";
import type { TaglibLookup } from "../taglib/lookup";
import type { Translator } from "./try-load-translator";

export type CompileStage =
  | "parse"
  | "migrate"
  | "transform"
  | "analyze"
  | "translate";

/** A compile's config as the pipeline reads it: every option, with its translator loaded. */
export type MarkoOpts = Omit<Required<Config>, "translator"> & {
  translator: Translator;
};

/** Babel's options for a template's file, as Marko's plugin finds them. */
export type FileOpts = t.BabelFile["opts"] & {
  parserOpts: ParserOptions & {
    plugins: NonNullable<ParserOptions["plugins"]>;
    markoOpts: MarkoOpts;
  };
  generatorOpts?: object;
  plugins: unknown[];
  presets: unknown[];
};

/** What the compile pipeline keeps on a template's Babel file, beyond Babel's own. */
export interface CompileFile extends t.BabelFile {
  opts: FileOpts;
  markoOpts: MarkoOpts;
  /** The program's scope, as on Babel's own `File`. */
  scope: t.Scope;
  ___compileStage: CompileStage;
  ___taglibLookup: TaglibLookup;
  ___getMarkoFile: (
    code: string,
    fileOpts: FileOpts,
    markoOpts: MarkoOpts,
  ) => CompileFile;
  /** The templates this one's analysis loaded, by filename. */
  ___analyzedFiles: Map<string, CompileFile>;
  /** The templates this compile loaded, by filename. */
  ___loadedFiles: Map<string, CompileFile>;
  ___hasParseErrors?: boolean;
  /** The tag hooks of each tag name, as the migrate and transform stages load them. */
  MIGRATOR_CACHE?: Record<string, HookModule[]>;
  TRANSFORMER_CACHE?: Record<string, HookModule[]>;
  buildCodeFrameError(node: t.Node | null | undefined, msg: string): Error;
}

/** What the compile pipeline keeps on a tag node, beyond its Babel fields. */
export type TagNode = t.MarkoTag & {
  /** The tag's definition, as the parser looked it up (`null` for none). */
  tagDef?: TagDefinition | null;
  _isDynamicString?: boolean;
  extra?: t.MarkoTag["extra"] & { tagNameImported?: string };
};
