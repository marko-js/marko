import { strip as stripJsonComments } from "@luxass/strip-json-comments";

import taglibConfig from "../config";

export function readFileSync(path) {
  var json = taglibConfig.fs.readFileSync(path, "utf8");

  try {
    var taglibProps = JSON.parse(stripJsonComments(json));
    return taglibProps;
  } catch (cause) {
    throw new Error(
      `Unable to parse JSON file at path "${path}": ${cause.message}`,
      { cause },
    );
  }
}
