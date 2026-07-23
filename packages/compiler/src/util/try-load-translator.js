import path from "path";

import markoModules from "@marko/compiler/modules";

import config from "../config";
const cache = {};

export default function (requested = config.translator) {
  if (typeof requested === "string") {
    let translator = cache[requested];
    if (!translator) {
      const file = markoModules.resolve(requested);
      translator = markoModules.require(file);
      // The translator declares its LLM cheat sheet relative to its own module;
      // resolve it to a cwd-relative path an agent can read directly.
      if (typeof translator.cheatsheet === "string") {
        translator.cheatsheet = path.relative(
          markoModules.cwd,
          path.resolve(path.dirname(file), translator.cheatsheet),
        );
      }
      cache[requested] = translator;
    }
    return translator;
  }

  return requested;
}
