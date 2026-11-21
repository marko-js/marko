import path from "path";

import type { types as t } from "@marko/compiler";
import markoModules from "@marko/compiler/modules";

import { globalConfig } from "../config";
import type { Translator as TaglibTranslator } from "../taglib/lookup";

/** A visitor, or several to merge. */
export type Visitors = t.Visitor | t.Visitor[];

/** A translator module, as the compiler reads it (`AGENTS.md` › Translator contract). */
export interface Translator extends TaglibTranslator {
  translate: t.Visitor;
  transform?: t.Visitor;
  analyze?: Visitors;
  preferAPI?: "tags" | "class";
  version?: string;
  getRuntimeEntryFiles?(output: string, optimize: boolean): string[];
  /** Its LLM syntax reference: relative to its module, then, once loaded, to the cwd. */
  cheatsheet?: string;
}

const cache: Record<string, Translator> = {};

/**
 * The translator a config names: a module id, the module itself, or the global
 * config's when omitted. What it gives is taken to be one; callers check what
 * they need of it.
 */
export default function tryLoadTranslator(
  requested: unknown = globalConfig.translator,
): Translator | undefined {
  if (typeof requested === "string") {
    let translator = cache[requested];
    if (!translator) {
      const file = markoModules.resolve(requested);
      translator = markoModules.require(file) as Translator;
      // The translator declares its LLM cheat sheet relative to its own module;
      // resolve it to a cwd-relative path an agent can read directly. Copy the
      // translator since it may be a frozen ESM namespace.
      if (typeof translator.cheatsheet === "string") {
        translator = {
          ...translator,
          cheatsheet: path.relative(
            markoModules.cwd,
            path.resolve(path.dirname(file), translator.cheatsheet),
          ),
        };
      }
      cache[requested] = translator;
    }
    return translator;
  }

  return requested as Translator | undefined;
}
