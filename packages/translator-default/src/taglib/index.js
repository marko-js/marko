import loader from "marko/src/taglib/taglib-loader";

export default [
  loader.loadTaglibFromProps(
    loader.createTaglib(require.resolve("./core/marko.json")),
    require("./core/marko.json")
  ),
  loader.loadTaglibFromProps(
    loader.createTaglib(require.resolve("./migrate/marko.json")),
    require("./migrate/marko.json")
  )
];
