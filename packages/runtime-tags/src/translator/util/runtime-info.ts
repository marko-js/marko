import pkg from "../../../package.json" with { type: "json" };
export default {
  name: pkg.name,
  version: pkg.version,
  taglibId: "marko-core",
};
