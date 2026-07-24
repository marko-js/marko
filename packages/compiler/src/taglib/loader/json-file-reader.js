import { strip as stripJsonComments } from "@luxass/strip-json-comments";

import taglibConfig from "../config";

var fsReadOptions = { encoding: "utf8" };

export function readFileSync(path) {
  var json = String(taglibConfig.fs.readFileSync(path, fsReadOptions));

  try {
    var taglibProps = JSON.parse(stripJsonComments(json));
    return taglibProps;
  } catch (cause) {
    throw new Error('Unable to parse JSON file at path "' + path + '".', {
      cause,
    });
  }
}
