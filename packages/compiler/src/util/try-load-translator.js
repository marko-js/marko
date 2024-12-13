import markoModules from "../../modules";
import config from "../config";
const cache = {};

export default function (requested = config.translator) {
  if (typeof requested === "string") {
    return (
      cache[requested] || (cache[requested] = markoModules.require(requested))
    );
  }

  return requested;
}
