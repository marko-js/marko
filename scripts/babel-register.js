// aliased as ~ts via package.json
require("@babel/register")({
  babelrc: false,
  configFile: false,
  extensions: [".js", ".ts"],
  presets: ["@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-export-namespace-from",
  ],
});
