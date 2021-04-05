import markoModules from "../../modules";
import config from "../config";
const cache = {};

export default function (requested = config.translator) {
  if (typeof requested === "string") {
    const cached = cache[requested];
    if (cached) {
      return cached;
    }

    let translator;

    try {
      translator = markoModules.require(requested);
    } catch (err) {
      try {
        translator = markoModules.require(`@marko/translator-${requested}`);
      } catch {
        try {
          translator = markoModules.require(`marko-translator-${requested}`);
        } catch {
          throw err;
        }
      }
    }

    return (cache[requested] = translator);
  }

  return requested;
}
