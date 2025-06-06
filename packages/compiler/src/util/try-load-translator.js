import markoModules from "../../modules";
const cache = {};

export default function (requested) {
  if (typeof requested === "string") {
    return (
      cache[requested] ||
      (cache[requested] = markoModules.require(markoModules.resolve(requested)))
    );
  }

  return requested;
}
